import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin.jsx";
import { HEADS } from "./photos.js";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Coin
    caption="Heads"
    src={HEADS}
  />);
});

it("has the correct alt text & src", function () {
  const { container, debug } = render(<Coin
    caption="Heads"
    src={HEADS}
  />);
  const img = container.querySelector("img");
  debug(img);

  expect(img.getAttribute("alt"))
    .toEqual("Heads");
  expect(img.getAttribute("src"))
    .toContain(".jpg");
});

it("matches snapshot", function () {
  const { container } = render(<Coin
    caption="Heads"
    src={HEADS}
  />);
  expect(container).toMatchSnapshot();
});