import React from "react";
import "../../styles/MonthPicker.scss";

const MonthPicker = () => (
  <div className="month-picker">
    <div className="month-picker__arrow-button month-picker__arrow-button--left">
      {"<"}
    </div>
    <div className="month-picker__month-label">October</div>
    <div className="month-picker__year-label">2021</div>
    <div className="month-picker__arrow-button month-picker__arrow-button--right">
      {">"}
    </div>
  </div>
);

export default MonthPicker;
