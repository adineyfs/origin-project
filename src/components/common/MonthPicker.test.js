import React from "react";
import { shallow } from "enzyme";
import MonthPickerTest from "./MonthPicker";

describe("Month Picker", () => {
  it("Should render with default props", () => {
    const component = shallow(<MonthPickerTest />);
    expect(component).toMatchSnapshot();
  });

  it("Should render with custom props and call functions correctly", () => {
    const handleRightClickMock = jest.fn();
    const handleLeftClickMock = jest.fn();
    const component = shallow(
      <MonthPickerTest
        onForwardClick={handleRightClickMock}
        onBackClick={handleLeftClickMock}
        month="June"
        year={2021}
      />
    );
    component.find(".month-picker__arrow-button--left").simulate("click");
    expect(handleLeftClickMock).toHaveBeenCalledTimes(1);

    component.find(".month-picker__arrow-button--right").simulate("click");
    expect(handleRightClickMock).toHaveBeenCalledTimes(1);

    expect(component.find(".month-picker__month-label").text()).toBe("June");
    expect(component.find(".month-picker__year-label").text()).toBe("2021");
  });

  it("Should render with custom props and call functions correctly", () => {
    const handleRightClickMock = jest.fn();
    const handleLeftClickMock = jest.fn();
    const component = shallow(
      <MonthPickerTest
        onForwardClick={handleRightClickMock}
        onBackClick={handleLeftClickMock}
        month="June"
        year={2021}
      />
    );
    component.find(".month-picker__arrow-button--left").simulate("click");
    expect(handleLeftClickMock).toHaveBeenCalledTimes(1);

    component.find(".month-picker__arrow-button--right").simulate("click");
    expect(handleRightClickMock).toHaveBeenCalledTimes(1);

    expect(component.find(".month-picker__month-label").text()).toBe("June");
    expect(component.find(".month-picker__year-label").text()).toBe("2021");
  });
});
