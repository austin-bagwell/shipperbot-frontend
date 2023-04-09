import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landing page header", () => {
  render(<App />);
  const linkElement = screen.getByText(/What is shipperBot\?/i);
  expect(linkElement).toBeInTheDocument();
});
