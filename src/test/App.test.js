import React from "react";
import { render } from "@testing-library/react";
import App from "../app";
import { Store } from "../store/";

describe("<App />", () => {
  it("Renders <App /> component", () => {
    const component = render(<Store><App /></Store>);
    expect(component).toBeDefined();
  });

  it("Renders a header element", () => {
    const { container } = render(<Store><App /></Store>);
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("Renders a main element to hold view", () => {
    const { container } = render(<Store><App /></Store>);
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
  });

  it("Renders a Home view", () => {
    const { container } = render(<Store><App /></Store>);
    const home = container.querySelector(".home");
    expect(home).toBeInTheDocument();
  });

  it("Renders a Compare view", () => {
    const { container } = render(<Store><App /></Store>);
    const compare = container.querySelector(".compare");
    expect(compare).toBeInTheDocument();
  });

});
