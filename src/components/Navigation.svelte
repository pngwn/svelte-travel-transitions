<script>
  import MenuDrawer from "./MenuDrawer.svelte";
  import IconBase from "./icons/IconBase.svelte";
  import IconThreeDot from "./icons/IconThreeDot.svelte";
  import NavTransition from "./NavTransition.svelte";
  import Stats from "./Stats.svelte";

  import { firstName, zoomFade } from "./_shared.js";
  import { users, currentUser } from "../store/index.js";

  export let path;

  let saved = false,
    menuOpen = false,
    people;

  $: people = [$currentUser, ...$users.filter((v) => v.id !== $currentUser.id)];

  const bg = {
    "/": 1,
    "/place": 2,
    "/group": 3,
  };

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header>
  <div class="bk-img">
    {#if path === "/"}
      <div
        class="header-img{bg[path]}"
        out:zoomFade
        in:zoomFade={{ scale: false }}
      />
    {:else if path === "/place/"}
      <div class="header-img2" out:zoomFade in:zoomFade={{ scale: false }} />
    {:else}
      <div class="header-img3" out:zoomFade in:zoomFade={{ scale: false }} />
    {/if}
  </div>

  <div class="nav-wrapper">
    <nav>
      <ul>
        <li>
          <a sveltekit:prefetch href="/"
            >{firstName($currentUser.name)}'s Home</a
          >
        </li>
        <li>
          <a sveltekit:prefetch href="/place"
            >{firstName($currentUser.name)}'s Places</a
          >
        </li>
        <li>
          <a sveltekit:prefetch href="/group"
            >{firstName($currentUser.name)}'s Group Trips</a
          >
        </li>
      </ul>

      <div on:click={toggleMenu} class="menu">
        <IconBase iconName="menu" iconColor="white" width="28" height="28">
          <IconThreeDot {menuOpen} />
        </IconBase>
      </div>

      {#if menuOpen}
        <MenuDrawer />
      {/if}

      <NavTransition {path} {people} />

      {#if path === "/"}
        <Stats selectedUser={$currentUser} />
      {/if}
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    width: 100vw;
    height: 300px;
    position: relative;
    &:before {
      content: "";
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: -moz-radial-gradient(
        center,
        ellipse cover,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 36%,
        rgba(0, 0, 0, 0.65) 100%
      ); /* FF3.6-15 */
      background: -webkit-radial-gradient(
        center,
        ellipse cover,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 36%,
        rgba(0, 0, 0, 0.65) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 36%,
        rgba(0, 0, 0, 0.65) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      opacity: 0.6;
    }
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #000;
    }
  }

  @mixin header($imgurl) {
    background: url($imgurl) center center;
    background-size: cover;
    position: absolute;
    width: 100vw;
    height: 300px;
  }

  .header-img1 {
    @include header("/header1.jpg");
  }

  .header-img2 {
    @include header("/header2.jpg");
  }

  .header-img3 {
    @include header("/header3.jpg");
  }

  .bk-img {
    position: absolute;
    width: 100vw;
    height: 300px;
    overflow: hidden;
    top: 0;
  }

  .nav-wrapper {
    height: 49px;
    width: 100vw;
    position: relative;
    z-index: 1000;
    background: rgba(4, 67, 98, 0.25);
  }

  @media screen and (max-width: 1030px) {
    .nav-wrapper {
      padding: 0 20px;
    }
  }

  ul {
    list-style: none;
    padding: 15px 0;
    li {
      display: inline-block;
      margin-right: 40px;
    }
    a,
    a:active,
    a:visited {
      color: white;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      display: none;
    }
  }

  .nuxt-link-active {
    font-weight: bold;
  }

  nav {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
  }

  .menu {
    position: absolute;
    right: 0;
    top: 8px;
    cursor: pointer;
  }
</style>
