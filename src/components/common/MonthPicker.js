import React from "react";
import "../../styles/MonthPicker.scss";

const MonthPicker = () => (
  <div className="monthly-payment-container">
    <div className="right-arrow-button">
      <input type="button" value="<" />
    </div>
    <div className="month-label">October</div>
    <div className="year-label">2021</div>
    <div className="left-arrow-button">
      <input type="button" value=">" />
    </div>
  </div>
);

export default MonthPicker;
