export function firstName(input) {
    const lastIndex = input.lastIndexOf(" ");
    return input.substring(0, lastIndex);
  }