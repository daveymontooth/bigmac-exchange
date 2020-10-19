import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from "../components/";

describe("<Loader />", () => {
  it("Renders <Loader /> component", () => {
    const component = render(<Loader />);
    expect(component).toBeDefined();
  });

  it("Renders with expected message", () => {
    const msg = "Loading...";
    render(<Loader message={msg} />);
    const loadingMessage = screen.getByText(msg);
    expect(loadingMessage).toBeDefined();
  });
});