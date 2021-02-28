import React from "react";
import "../../styles/MonthlyAmount.scss";

const MonthlyAmount = () => (
  <div className="monthly-amount">
    <p>Monthly amount</p>
    <p>
      {`You're planning 48 monthly deposits to reach your $25.000 goal by October
      2020`}
    </p>
  </div>
);

export default MonthlyAmount;
