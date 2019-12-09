// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Controls from "./Controls";

test("Controls.js renders", () => {
  const wrapper = render(<Controls />);
  expect(wrapper).toBeDefined();
});
