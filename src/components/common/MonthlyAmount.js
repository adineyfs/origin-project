import React from "react";
import PropTypes from "prop-types";
import {
  calculateMonthlyPayment,
  calculateNumberOfDeposits,
} from "../../utils";
import "../../styles/MonthlyAmount.scss";

const MonthlyAmount = ({ remainingMonths, totalAmount, month, year }) => {
  const monthlyPayment = calculateMonthlyPayment(remainingMonths, totalAmount);
  const numberOfDeposits = calculateNumberOfDeposits(
    remainingMonths,
    totalAmount
  );

  return (
    <div className="monthly-amount">
      <div className="monthly-amount__label">Monthly amount </div>
      <div className="monthly-amount__amount">{"$" + `${monthlyPayment}`}</div>
      <div className="monthly-amount__amount-to-save-description">
        <span>
          {`You're planning `}
          <b>{numberOfDeposits} </b>
          {"to reach your $"}
          <b>{totalAmount}</b>
          {" goal by "}
          <b>
            {month} {year}.
          </b>
        </span>
      </div>
    </div>
  );
};

MonthlyAmount.propTypes = {
  remainingMonths: PropTypes.number,
  totalAmount: PropTypes.number,
  month: PropTypes.string,
  year: PropTypes.number,
};

export default MonthlyAmount;
