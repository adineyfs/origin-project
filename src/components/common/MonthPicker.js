import React from "react";
import "../../styles/MonthPicker.scss";

const MonthPicker = () => (
  <div className="month-picker">
    <div className="month-picker__arrow-button month-picker__arrow-button--right">
      <input type="button" value="<" />
    </div>
    <div className="month-picker__month-label">October</div>
    <div className="month-picker__year-label">2021</div>
    <div className="month-picker__arrow-button month-picker__arrow-button--left">
      <input type="button" value=">" />
    </div>
  </div>
);

export default MonthPicker;
