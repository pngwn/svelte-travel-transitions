<script>
  import IconBase from "./icons/IconBase.svelte";
  import IconMapPin from "./icons/IconMapPin.svelte";
  import IconPlus from "./icons/IconPlus.svelte";
  import IconCalendar from "./icons/IconCalendar.svelte";
  import IconMail from "./icons/IconMail.svelte";

  import anime from "animejs";
  import { onMount } from "svelte";

  import { swap, fade } from "./_shared.js";
  import {
    currentUser,
    addFollower,
    removeFollower,
    changeUser,
  } from "../store/index.js";

  export let path, people;

  let following = false,
    saved = false,
    save,
    tl,
    currentClass,
    el_name,
    width;

  $: currentClass =
    path.replace(/\//g, "") === "" ? "index" : path.replace(/\//g, "");

  const addPlace = () => {
    if (!saved && path !== "/") {
      tl.restart();
      saved = true;
    } else {
      saved = false;
    }
  };

  const toggleFollow = () => {
    if (following) {
      removeFollower($currentUser.id);
    } else {
      addFollower($currentUser.id);
    }
    following = !following;
  };

  function get_translate_position() {
    if (/place/.test(path)) {
      if (width > 560) {
        return `${175}px, -121px, 0`;
      } else {
        return `${width - 45 - el_name * 0.75}px, -121px, 0`;
      }
    } else if (/group/.test(path)) {
      return `0px, -125px, 0`;
    } else {
      return `0, 0, 0`;
    }
  }

  onMount(() => {
    tl = anime({
      targets: save,
      autoplay: false,
      opacity: [
        { value: 1, duration: 500 },
        { value: 0, delay: 1000, duration: 500 },
      ],
      easing: "easeOutExpo",
      begin: (anim) => {
        Object.assign(save.style, { visibility: "visible" });
      },
      complete: (_) => {
        Object.assign(save.style, { visibility: "hidden" });
      },
    });
  });
</script>

<svelte:window bind:innerWidth={width} />

<div class={currentClass}>
  <div class="people">
    {#each people as { img, name, id }, i (id)}
      <div
        on:click={() => changeUser(id)}
        animate:swap={{ i }}
        class="{name === $currentUser.name
          ? 'profile-photo'
          : 'profile-photo-secondary'} profile-{i}"
      >
        <div class="online" />
        <img src={img} alt="{name}'s profile image" />
      </div>
    {/each}
  </div>

  <button
    on:click={() => toggleFollow()}
    class="{following ? 'active-follow' : ''} follow"
  >
    {#if following}
      <span>&#10004; Following</span>
    {:else}
      <span>Follow</span>
    {/if}
  </button>

  <h2
    bind:offsetWidth={el_name}
    class="profile-name"
    style="transform: translate3d({get_translate_position(
      el_name,
      width
    )}) scale({/place/.test(path) ? 0.75 : 1});"
  >
    {#if /group/.test(path)}
      <span class="user-trip">{$currentUser.trips[0]}</span>
    {:else}
      <span
        >{width > 400
          ? $currentUser.name
          : $currentUser.name.split(" ").shift()}</span
      >
    {/if}
  </h2>

  <div
    on:click={addPlace}
    class="side-icon"
    style={path === "/"
      ? ""
      : `transform: translateY(-40px); background-color: rgba(255, 255, 255, 0.8)`}
  >
    {#if path === "/"}
      <IconBase iconName="mail" iconColor="white" width="22" height="22">
        <IconMail />
      </IconBase>
    {:else}
      <IconBase iconName="plus" width="18" height="18">
        <IconPlus {saved} />
      </IconBase>
    {/if}
  </div>

  <div bind:this={save} class="saveinfo">Saved!</div>

  <aside key="aside">
    {#if path === "/place/"}
      <p class="map-pin" transition:fade>
        <IconBase iconName="map pin" width="18" height="18">
          <IconMapPin />
        </IconBase>
        United States
      </p>
    {:else if path === "/group/"}
      <p class="calendar" transition:fade>
        <IconBase iconName="calendar" width="18" height="18">
          <IconCalendar />
        </IconBase>
        {$currentUser.days} days traveling
      </p>
    {/if}
  </aside>
</div>

<style lang="scss">
  aside p {
    text-align: right;
    position: absolute;
    right: 0;
    top: 250px;
    color: white;
  }

  .calendar,
  .map-pin {
    opacity: 1;
  }

  @mixin group($top, $left) {
    display: block;
    backface-visibility: hidden;
    margin: 0 3px;
    transform: scale(1);
    transform-origin: 0 0;
  }

  @mixin online($size, $position, $border) {
    position: absolute;
    background: #07dc3c;
    border-radius: 50% 50%;
    width: $size;
    height: $size;
    top: $position;
    left: $position;
    border: $border;
    opacity: 0;
    transform-origin: 0 0;
    z-index: 999;
  }

  .profile-photo {
    width: 50px;
    height: 50px;
    @include group(50px, 0);
    img {
      border-radius: 4px;
      transform-origin: 0 0;
      width: 50px;
      height: 50px;
    }
    .online {
      @include online(40px, 155px, 2px solid black);
    }
  }

  .profile-photo-secondary {
    @include group(50px, 0);
    width: 50px;
    opacity: 0;
    img {
      border-radius: 50% 50%;
      transform-origin: 0 0;
    }
    .online {
      @include online(40px, 155px, 2px solid black);
    }
  }

  .profile-photo,
  .profile-photo-secondary {
    transition: 0.4s all ease;
    img {
      transition: 0.4s all ease;
      width: 400%;
      height: 400%;
      cursor: pointer;
    }
  }

  .group .profile-0 {
    transform: scale(0.25);
  }
  .profile-1 {
    transform: scale(0.25);
  }
  .profile-2 {
    transform: scale(0.25);
  }
  .profile-3 {
    transform: scale(0.25);
  }

  .follow {
    font-weight: bold;
    z-index: 1;
    width: 150px;
    transition: 0.4s all ease;
    position: absolute;
    top: 320px;
    left: 220px;
    @include group(320px, 220px);
    &:focus {
      outline: 1px dotted rgb(5, 134, 106);
    }
  }

  .saveinfo {
    color: white;
    position: absolute;
    top: 194px;
    font-size: 20px;
    right: 56px;
    text-align: right;
    visibility: hidden;
    opacity: 0;
  }

  .active-follow {
    background: rgb(5, 134, 106);
  }

  .profile-name {
    font-size: 35px;
    position: absolute;
    left: 0;
    top: 355px;
    transition: 0.4s all ease;
    @include group(355px, 0);
  }

  .side-icon {
    position: absolute;
    top: 220px;
    right: 0;
    display: block;
    transition: 0.4s all ease-out;
    padding: 12px 12px 9px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50% 50%;
    cursor: pointer;
  }

  .place {
    .follow {
      transform: translate3d(-218px, -84px, 0);
    }
    .profile-photo {
      transform: translate3d(2px, -80px, 0) scale(0.75);
    }
    .profile-name {
      // transform: translate3d(170px, -121px, 0) scale(0.75);
      color: white;
    }
    .side-icon {
      transform: translate3d(0, -40px, 0);
      background: rgba(255, 255, 255, 0.9);
    }
    .calendar {
      opacity: 1;
    }
  }
  .people {
    position: absolute;
    top: 151px;
    height: 50px;
    display: flex;
  }

  .group {
    .follow {
      display: none;
    }
    .follow {
      opacity: 0;
      transition: none;
    }
    .profile-photo {
      img {
        border-radius: 50% 50%;
      }
    }
    .profile-0,
    .profile-1,
    .profile-2,
    .profile-3 {
      opacity: 1;
    }
    .profile-photo,
    .profile-photo-secondary {
      img:hover {
        transition: 0.2s all ease;
        border: 10px solid white;
      }
    }
    .online {
      opacity: 1;
    }
    .profile-name {
      // transform: translate3d(0px, -125px, 0);
      color: white;
    }
  }

  .index.profile-photo {
    transform: translate3d(0, 0, 0) scale(1);
  }

  .index.profile-photo.profile-0 {
    transform: translate3d(0, 0, 0) scale(1) !important;
  }

  //make the icon aligned with the avatars that are similar on mobile
  @media screen and (max-width: 600px) {
    .index {
      .follow {
        width: calc(100% - 220px);
      }
    }
    .group,
    .place {
      .side-icon {
        transform: translate3d(0, -65px, 0);
        padding: 14px 14px 12px;
      }
    }
  }

  .items,
  .list-move {
    transition: all 0.4s ease;
  }

  .list-leave-active {
    position: absolute;
  }

  @media screen and (max-width: 600px) {
    aside {
      display: none;
    }
  }
</style>
