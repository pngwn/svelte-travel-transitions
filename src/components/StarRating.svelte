<script>
  import IconBase from "./icons/IconBase.svelte";
  import IconStarFull from "./icons/IconStarFull.svelte";
  import IconStarEmpty from "./icons/IconStarEmpty.svelte";

  export let rating = 4;

  let maxRating;
  $: maxRating = 5 - rating;
</script>

<div>
  {#each { length: rating } as _}
    <IconBase iconName="full star" color="orangered">
      <IconStarFull />
    </IconBase>
  {/each}

  {#each { length: maxRating } as _}
    <IconBase iconName="empty star" color="orangered">
      <IconStarEmpty />
    </IconBase>
  {/each}
</div>

<style scoped>
</style>
