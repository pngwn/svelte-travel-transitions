<svelte:options namespace="svg" />

<script>
  import { afterUpdate, onMount } from "svelte";
  import anime from "animejs";

  export let saved;
  let prev, tl, plus, line1, line2;

  afterUpdate(() => {
    if (prev === undefined) {
      prev = saved;
      return;
    }
    if (saved !== prev && saved) {
      tl.restart();
      prev = saved;
    } else if (saved !== prev && !saved) {
      tl.reverse();
      tl.play();
      prev = saved;
    }
  });

  onMount(() => {
    tl = anime.timeline({ autoplay: false });
    tl.add({
      targets: plus,
      duration: 550,
      rotate: -360,
      easing: "easeInOutQuint",
    })
      .add({
        targets: line1,
        duration: 500,
        rotate: "-50",
        translateX: 10,
        translateY: 8,
        scaleX: 0.9,
        easing: "easeInOutQuint",
        offset: 0,
      })
      .add({
        targets: line2,
        duration: 500,
        rotate: "-45",
        translateX: "-2",
        translateY: -3,
        scaleY: 0.4,
        easing: "easeInOutQuint",
        offset: 0,
      });

    if (saved) {
      tl.seek(550);
    }
  });
</script>

<g bind:this={plus} class={saved ? "saved" : ""}>
  <line
    bind:this={line1}
    x1="0"
    x2="24"
    y1="12"
    y2="12"
    stroke="#333"
    stroke-linecap="round"
    stroke-width="3"
  />
  <line
    bind:this={line2}
    x1="12"
    x2="12"
    y1="0"
    y2="24"
    stroke="#333"
    stroke-linecap="round"
    stroke-width="3"
  />
</g>

<style>
  g {
    transform-origin: 50% 50%;
  }

  line {
    transform-origin: 50% 100%;
  }
</style>
