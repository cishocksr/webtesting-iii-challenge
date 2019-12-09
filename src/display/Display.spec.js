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
