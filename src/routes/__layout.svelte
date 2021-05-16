<script>
  import "../global.css";
  import Navigation from "../components/Navigation.svelte";
  import Footer from "../components/Footer.svelte";

  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>SvelteKit Page Transitions</title>
</svelte:head>

<div>
  <Navigation path={$page.path} />
  <slot />
  <Footer />
</div>
