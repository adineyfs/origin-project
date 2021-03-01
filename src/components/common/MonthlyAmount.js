import React from "react";
import "../../styles/MonthlyAmount.scss";

const MonthlyAmount = () => {
  return (
    <div className="monthly-amount">
      <div className="monthly-amount__label">Monthly amount </div>
      <div className="monthly-amount__amount">{"$521"}</div>
      <div className="monthly-amount__amount-to-save-description">
        <span>
          {`You're planning `}
          <b>48 monthly deposits </b>
          {"to reach your "}
          <b>$25.000 </b>
          {"goal by "}
          <b>October 2020.</b>
        </span>
      </div>
    </div>
  );
};

export default MonthlyAmount;
