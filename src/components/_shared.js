import { sineOut } from "svelte/easing.js";

export function firstName(input) {
  const lastIndex = input.lastIndexOf(" ");
  return input.substring(0, lastIndex);
}

export function grow(node) {
  return {
    duration: 200,
    easing: sineOut,
    css: t => `transform: scale(${t}); opacity: ${t}`
  };
}

export function fade(node, {delay}) {
  return {
    duration: 150,
    delay,
    easing: sineOut,
    css: t => `opacity: ${t}`
  };
}

export function zoomFade(_, { scale = true }) {
  return {
    duration: 300,
    easing: sineOut,
    css: (t, u) => `
      transform: scale(${scale ? u * 0.1 + 1 : 1}) translateZ(0);
      opacity: ${t};
    `
  };
}