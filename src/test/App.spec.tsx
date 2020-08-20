import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders placeholder text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/New York/i);
  expect(textElement).toBeInTheDocument();
});
