import React, { useState } from "react";
//import "./Game.css";
import Coin from "./Coin.jsx";
import { getCoin } from "./coin.js";

/** Play coin flipping game
 *
 * State:
 * - coin: {face}
 * - counter: {heads, tails}
 */

function Game() {
  console.log("Game");

  const initialCoin = {
    caption: "",
    src: ""
  };


  const [coin, setCoin] = useState(initialCoin);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  // const [count, setCount] = useState(0);

  // function incrCount() {
  //   setCount(count => count + 1);
  // }


  function flipCoin() {
    console.log("flipCoin");
    const coin = getCoin();
    console.log("COIN", coin);
    setCoin(coin);

    if (coin.caption === "Heads") {
      setHeadCount(oldCount => oldCount + 1);
    } else if (coin.caption === "Tails") {
      setTailCount(oldCount => oldCount + 1);
    }
  }

  return (
    <div className="Game">
      <h1>Let's flip a coin</h1>
      <Coin
        caption={coin.caption}
        src={coin.src}
      />
      <button onClick={flipCoin}>Flip Coin</button>
      <p>Out of {tailCount + headCount} flips, there have
        been {headCount} heads and {tailCount} tails. </p>
    </div>
  );
}

export default Game;