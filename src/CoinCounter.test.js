import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react";
import App from "./App";
import CoinCounter from "./CoinCounter";

// smoke test
it("renders without crashing", () => {
  render(<CoinCounter />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<CoinCounter />);
  expect(asFragment()).toMatchSnapshot()
});

beforeEach(function () {
  jest.spyOn(Math, "random").mockReturnValueOnce(0.25);
});

afterEach(function () {
  Math.random.mockRestore();
});

it("does not show coin", () => {
  const { queryByAltText } = render(<CoinCounter />);

  var img = queryByAltText("heads");
  expect(img).not.toBeInTheDocument();

  img = queryByAltText("heads");
  expect(img).not.toBeInTheDocument();
});

describe("test tails flip", () => {
  test("test tails", function () {
    jest.spyOn(Math, "random").mockReturnValueOnce(0.25);
  });

  it("flip coin to heads", () => {
    const { queryByAltText, getByText } = render(<CoinCounter />);

    fireEvent.click(getByText("Flip Coin"));

    let img = queryByAltText("tails flipped");
    expect(img).toBeInTheDocument();
  });
// });

// describe("test heads flip", () => {
  test("test heads", function () {
    jest.spyOn(Math, "random").mockReturnValueOnce(0.75);
  });

  it("flip coin to heads", () => {
    const { queryByAltText, getByText } = render(<CoinCounter />);

    fireEvent.click(getByText("Flip Coin"));

    let img = queryByAltText("tails flipped");
    expect(img).toBeInTheDocument();
  });
});
