// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("Controls.js renders", () => {
  const wrapper = render(<Controls />);
  expect(wrapper).toBeDefined();
});

test("Buttons provided to toggle state", () => {
  const { getByText } = render(<Controls />);

  const close = getByText(/close gate/i);
  const lock = getByText(/lock gate/i);

  expect(close).toBeDefined();
  expect(lock).toBeDefined();
});

test("Open button changes the state to open", () => {
  const mockToggleClosed = jest.fn();
  const { getByText, findByText } = render(
    <Controls closed={false} locked={false} toggleClosed={mockToggleClosed} />
  );

  const closeBtn = getByText(/close gate/i);
  expect(closeBtn).toBeTruthy();

  fireEvent.click(closeBtn);

  const openBtn = findByText(/open gate/i);

  expect(openBtn).toBeDefined();
  expect(mockToggleClosed).toHaveBeenCalled();
});

test("Lock button text changes to reflect the state the door will be in if clicked", () => {
  const toggleLocked = jest.fn();
  const { getByText, findByText } = render(
    <Controls locked={true} closed={true} toggleLocked={toggleLocked} />
  );

  const lockBtn = getByText(/unlock gate/i);
  expect(lockBtn).toBeDefined();
  fireEvent.click(lockBtn);

  const unlockBtn = findByText(/lock gate/i);

  expect(unlockBtn).toBeDefined();
  expect(toggleLocked).toHaveBeenCalled();
});

test("Closed toggle button is disabled if gate is locked", () => {
  const toggleClosed = jest.fn();
  const { getByText } = render(
    <Controls locked={true} closed={true} toggleClosed={toggleClosed} />
  );

  const gateBtn = getByText(/open gate/i);
  expect(gateBtn).toBeDefined();

  fireEvent.click(gateBtn);

  expect(toggleClosed).not.toHaveBeenCalled();
});

test("Locked toggle button is disabled if gate is open", () => {
  const mockToggleOpen = jest.fn();
  const { getByText } = render(
    <Controls closed={false} locked={false} mockToggleOpen={mockToggleOpen} />
  );

  const lockGateBtn = getByText(/lock gate/i);
  expect(lockGateBtn).toBeTruthy();

  fireEvent.click(lockGateBtn);

  expect(mockToggleOpen).not.toHaveBeenCalled();
});
