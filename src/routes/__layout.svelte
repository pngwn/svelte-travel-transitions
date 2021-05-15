<script>
  import Navigation from "../components/Navigation.svelte";
  import Footer from "../components/Footer.svelte";

  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Svelte-Sapper Page Transitions</title>
</svelte:head>

<div>
  <Navigation path={$page.path} />
  <slot />
  <Footer />
</div>
