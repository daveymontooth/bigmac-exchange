import React from "react";
import { render } from "@testing-library/react";
import Home from "../views/Home";
import { Store } from "../store/";

describe("<Home />", () => {
  it("Renders <Home /> component", () => {
    const component = render(<Store><Home /></Store>);
    expect(component).toBeDefined();
  });

});
