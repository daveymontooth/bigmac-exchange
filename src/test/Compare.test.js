import React from "react";
import { render } from "@testing-library/react";
import Compare from "../views/Compare";
import { Store } from "../store/";

describe("<Compare />", () => {
  it("Renders <Compare /> component", () => {
    const component = render(<Store><Compare /></Store>);
    expect(component).toBeDefined();
  });

});
