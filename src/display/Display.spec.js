// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Display.js renders", () => {
  const wrapper = render(<Display />);
  expect(wrapper).toBeDefined();
  expect(wrapper).not.toBeUndefined();
  expect(wrapper).not.toBeFalsy();
});

test("Defaults to open and unlocked", () => {
  const { getByText } = render(<Display />);
  const open = getByText(/open/i);
  const unlocked = getByText(/unlocked/i);

  expect(open).toBeDefined();
  expect(unlocked).toBeDefined();
});

test("Display is closed and locked", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  const unlocked = getByText(/locked/i);
  const open = getByText(/closed/i);

  expect(unlocked.textContent).toMatch("Locked");
  expect(open.textContent).toMatch("Closed");
});

test("Displays Closed if the closed prop is true", () => {
  const { getByText } = render(<Display closed={true} />);
  expect(getByText(/closed/i).textContent).toMatch("Closed");
});

test("Displays Open if the closed prop is not true", () => {
  const { getByText } = render(<Display closed={false} />);
  expect(getByText(/open/i).textContent).toMatch("Open");
});

test("When closed or locked, uses the red-led class", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  expect(getByText(/closed/i)).toHaveClass("red-led");
});

test("When open or unlocked, uses the green-led class", () => {
  const { getByText } = render(<Display closed={false} locked={false} />);
  expect(getByText(/open/i)).toHaveClass("green-led");
});
