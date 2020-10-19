import React from "react";
import { render, screen } from "@testing-library/react";
import { UserCountry } from "../components/";
import { Store } from "../store/";

describe("<UserCountry />", () => {
  it("Given no country it renders with country error message", () => {
    const message = "Sorry, it looks like there is no country data to display.";
    const testCountry = "";
    render(<Store><UserCountry country={ testCountry } /></Store>);
    const expectedMessage = screen.getByText(message);
    expect(expectedMessage).toBeDefined();
  });
  it("Given no amount it render amount error message", () => {
    const message = "Uh oh, it looks like we're missing a dollar amount.";
    render(<Store><UserCountry country={ "United States" }/></Store>);
    const expectedMessage = screen.getByText(message);
    expect(expectedMessage).toBeDefined();
  })
});