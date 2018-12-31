import { sineOut, quintOut } from "svelte/easing.js";

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

export function fade(node, {delay=0, duration = 150}) {
  
  return {
    duration,
    delay,
    easing: sineOut,
    css: t => {console.log(t); return`opacity: ${t}`}
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

export function swap (node, {from, to}, {duration = 700}) {
  const x = from.left - to.left;

  return {
    duration,
    easing: quintOut,
    css: (t, u) => `transform: translateX(${u * x}px) scale(0.25);`
    }
};