import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: null,
    trailingSlash: "always",
  },
  preprocess: preprocess(),
};

export default config;
