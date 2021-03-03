import React from "react";
import { shallow } from "enzyme";
import BuyAHouseFormTest from "./BuyAHouseForm";

describe("Buy a House Form", () => {
  it("Renders with default state", () => {
    const component = shallow(<BuyAHouseFormTest />);
    expect(component).toMatchSnapshot();
  });
});
