import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

// console.log(adapter());

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    files: {
      assets: "assets",
    },
  },
  preprocess: preprocess(),
};

export default config;
