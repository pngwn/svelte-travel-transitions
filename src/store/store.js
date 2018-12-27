import { writable } from 'svelte/store.js';
import { produce } from 'immer';

export function immerObservable(data) {
  const store = writable(data);

  function update(fn) {
    store.update(state => produce(state, fn));
  }

  // console.log(store);

  return {
    update,
    subscribe: store.subscribe
  };
}