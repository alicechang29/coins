import React from "react";
// import "./Coin.css";

/** Coin: displays heads or tails
 *
 * Props:
 * - caption: string describing the coin side: Heads or Tails
 * - src: string for the image link
 *
 * State:
 * - none
 *
 * App --> Game --> Coin
 */

function Coin({ caption = "", src = "" }) {

  return (
    <div className="Coin">
      <h4 className="Coin-title">{caption}</h4>
      <img className="Coin-image" src={src} alt={caption}></img>
    </div>
  );
}


export default Coin;