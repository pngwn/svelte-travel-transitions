<script>
  import StarRating from "../../components/StarRating.svelte";

  import { fade } from "../../components/_shared";
  import { users, places } from "../../store/index.js";
</script>

<main in:fade={{ delay: 400, duration: 400 }} out:fade={{ duration: 400 }}>
  <div class="places">
    <p class="top">{$users[0].name}'s Places</p>
    <h1>{$places[0].name}</h1>
    <p><strong>Rating: {$places[0].rating}</strong></p>
    <div class="stars">
      <StarRating />
    </div>

    <div class="main-img" />
    <p>{$places[0].description}</p>
  </div>

  <aside class="sidebar">
    <h3>Other Trips</h3>
    {#each $places as { name, img, description } (name)}
      <div class="location">
        <img src={img} alt={name} />
        <p class="top"><strong>{name}</strong></p>
        <p>{description}</p>
        <hr />
      </div>
    {/each}
  </aside>
</main>

<style lang="scss" scoped>
  h1 {
    font-size: 45px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .location img {
    width: 70px;
    height: 70px;
    float: left;
    margin: 0 10px 10px 0;
  }

  p,
  .stars {
    margin: 10px 0;
  }

  .main-img {
    background: url("/header1.jpg") center center;
    background-size: cover;
    width: 100%;
    height: 240px;
  }

  .top {
    margin: 30px 0 0;
  }
</style>
