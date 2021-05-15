import { sineOut, quintOut } from "svelte/easing";

export const firstName = (input) => input.substring(0, input.lastIndexOf(" "));

export const grow = (_) => ({
  duration: 200,
  easing: sineOut,
  css: (t) => `transform: scale(${t}); opacity: ${t}`,
});

export const fade = (_, { delay = 0, duration = 150 }) => ({
  duration,
  delay,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});

export const zoomFade = (_, { scale = true }) => ({
  duration: 300,
  easing: sineOut,
  css: (t, u) => `
    transform: scale(${scale ? u * 0.1 + 1 : 1}) translateZ(0);
    opacity: ${t};
  `,
});

export const swap = (_, { from, to }, { duration = 700 }) => {
  const x = from.left - to.left;

  return {
    duration,
    easing: quintOut,
    css: (t, u) => `transform: translateX(${u * x}px) scale(0.25);`,
  };
};
