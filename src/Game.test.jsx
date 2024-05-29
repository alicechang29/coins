import { it, expect, vi, beforeEach, afterEach } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Game from "./Game";
// import TEST_IMAGES from "./_testCommon.js";

Math.random = vi.fn();

beforeEach(function () {
  Math.random
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function () {
  Math.random.mockReset();
});

it("renders without crashing", function () {
  render(<Game />);
});

it("matches snapshot", function () {
  const { container } = render(<Game />);
  expect(container).toMatchSnapshot();
});
