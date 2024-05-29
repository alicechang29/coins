import coins from "./photos.js";
/**Returns a random coin flip: { face } */
function getCoin() {
  if (Math.random() > 0.5) {
    return coins[0];
  }
  return coins[1];
}

export { getCoin };
