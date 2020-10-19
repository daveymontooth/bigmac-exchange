import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

describe("<Header />", () => {
  it("Renders <Header /> component", () => {
    const component = render(<Header />);
    expect(component).toBeDefined();
  });

  it("Renders a logo img", () => {
    const { container } = render(<Header />);
    const img = container.querySelector("img");
    expect(img).toBeInTheDocument();
  });

  it("Renders the app name", () => {
    render(<Header />);
    const appNameHeading = screen.getByText(/big mac exchange/i);
    expect(appNameHeading).toBeDefined();
  });
});