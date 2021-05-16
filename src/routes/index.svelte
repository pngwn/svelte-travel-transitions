<script>
  import IconBase from "../components/icons/IconBase.svelte";
  import IconMapPin from "../components/icons/IconMapPin.svelte";

  import { fade } from "../components/_shared";
  import { places } from "../store/index.js";
</script>

<main in:fade={{ delay: 400, duration: 400 }} out:fade={{ duration: 400 }}>
  <div class="places" ref="places">
    {#each $places as { name, rating, description, img }}
      <div class="location">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p><strong>Rating: {rating}</strong></p>
        <p>{description}</p>
        <hr />
      </div>
    {/each}
  </div>

  <div class="mapcontain">
    <p>
      <IconBase iconName="mappin">
        <IconMapPin />
      </IconBase>
      Checked in at Honolulu location
    </p>
  </div>
</main>

<style lang="scss">
  main {
    padding-top: 20px;
    border-top: 1px solid #ddd;
    margin-top: 120px;
  }

  .places {
    img {
      float: left;
      margin: 0 15px 15px 0;
      height: 150px;
      width: 150px;
    }
    p {
      margin-top: 10px;
    }
    .location {
      padding: 10px 0;
    }
  }

  hr {
    border-top: 1px solid #ddd;
    border-bottom: none;
    margin-top: 15px;
  }

  .mapcontain {
    width: 35%;
    float: right;
    height: 400px;
    p {
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 600px) {
    .mapcontain {
      width: 100%;
      margin: 10px 0;
    }
  }
</style>
