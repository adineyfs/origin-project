import React from "react";
import { shallow } from "enzyme";
import TestTotalAmount from "./TotalAmount";

const handleChange = jest.fn();

describe("Total Amount Component", () => {
  it("Should render with default props", () => {
    const component = shallow(<TestTotalAmount />);
    expect(component).toMatchSnapshot();
  });

  it("Should render with some value and call onChange with it", () => {
    const component = shallow(
      <TestTotalAmount amount={100.0} onChange={handleChange} />
    );
    component.find(".total-amount__input").simulate("changeEvent");
    expect(handleChange).toHaveBeenCalled();
  });
});
