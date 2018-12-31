# svelte-travel-transitions

A clone of Sarah Drasner's Vue/Nuxt [page-transitions-travelapp](https://github.com/sdras/page-transitions-travelapp) built with [Svelte](https://svelte.technology/) and [Sapper](https://sapper.svelte.technology/). All credit goes to Sarah!

This was built with alpha versions of Svelte and Sapper, so who knows what might explode. 

There has been some attempt to Sveltify things a little. This version uses [animejs](http://animejs.com/) instead of [GSAP](https://greensock.com/) and in place of [Vuex](https://vuex.vuejs.org/) I used a combination of Svelte 3's built-in Reactive Store and [Immer](https://github.com/mweststrate/immer). Neither of these libraries are strictly speaking necessary (especially Immer) and I considered removing them but decided to leave them in to illustrate using such libraries with Svelte and Sapper. My changes are not a slight on these libraries, they are all excellent, I just decided to change things up a little.

Other changes to the code (other than just syntax) were necessary due to the differences between Svelte and Vue.

To clone it and get started:

```bash
git clone pngwn/svelte-travel-transitions
cd svelte-travel-transitions
yarn install # or npm!
yarn dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

