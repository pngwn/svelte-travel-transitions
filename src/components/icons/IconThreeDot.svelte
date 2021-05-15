<svelte:options namespace="svg" />

<script>
  export let menuOpen;
</script>

<g class={menuOpen ? "open" : ""}>
  <circle class="first" cx="3" cy="12" r="3" />
  <circle class="middle" cx="12" cy="12" r="3" />
  <circle class="last" cx="21" cy="12" r="3" />
</g>

<!-- TweenMax.to('.first', 0.2, {
        x: 18,
        ease: Sine.easeOut
      })
      TweenMax.to('.last', 0.2, {
        x: -18,
        ease: Sine.easeOut
      })
      TweenMax.staggerTo(
        '.first, .middle, .last',
        0.2,
        {
          fill: '#7eebe6',
          ease: Sine.easeOut
        },
        0.04 -->

<style>
  circle {
    transition: 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  .open .first {
    transform: translateX(18px);
  }

  .open .last {
    transform: translateX(-18px);
  }

  .open circle {
    fill: #7eebe6;
  }

  @keyframes swap {
    100% {
    }
  }
</style>
