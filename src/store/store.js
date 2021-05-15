import { writable } from "svelte/store";
import { produce } from "immer";

export function immerObservable(data) {
  const store = writable(data);

  function update(fn) {
    store.update((state) => produce(state, fn));
  }
  return {
    update,
    subscribe: store.subscribe,
  };
}
