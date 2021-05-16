# svelte-travel-transitions

[The actual app on the actual internet.](https://svelte-travel.netlify.com/)

A clone of Sarah Drasner's Vue/Nuxt [page-transitions-travelapp](https://github.com/sdras/page-transitions-travelapp) built with [SvelteKit](https://sapper.svelte.technology/). All credit goes to Sarah!

This was built with the `next` version of SvelteKit, so who knows what might explode. I didn't do the map thing because I have no idea what it's supposed to be!

There has been some attempt to Sveltify things a little. This version uses [animejs](http://animejs.com/) instead of [GSAP](https://greensock.com/) and in place of [Vuex](https://vuex.vuejs.org/) I used a combination of Svelte 3's built-in store API and [Immer](https://github.com/mweststrate/immer). Neither of these libraries are strictly speaking necessary (especially Immer) and I considered removing them but decided to leave them in to illustrate using such libraries with Svelte and SvelteKit. My changes are not a slight on these libraries, they are all excellent, I just decided to change things up a little.

Other changes to the code (other than just syntax) were necessary due to the differences between Svelte and Vue.

## Install

Clone the project to get started. Then:

```bash
# install dependencies
yarn install # or npm!

# run the dev build
yarn dev

# build for production
yarn build

# build a static site
yarn export
```
