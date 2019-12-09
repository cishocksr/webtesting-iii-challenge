// Test away
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, getByText } from "@testing-library/react";
import Dashboard from "./Dashboard";

afterEach(cleanup);

test("Dashboard.js renders", () => {
  const container = render(<Dashboard />);
  expect(container).toBeDefined();
  expect(container).toBeTruthy();
});

test("Shows the controls and display", () => {
  const { container } = render(<Dashboard />);
  const display = getByText(container, /open/i);
  const controls = getByText(container, /close gate/i);

  expect(display).toBeTruthy();
  expect(display).toBeVisible();
  expect(controls).toBeTruthy();
  expect(controls).toBeVisible();
});
