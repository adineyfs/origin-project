import React from "react";
import PropTypes from "prop-types";
import "../../styles/TotalAmount.scss";

const TotalAmount = ({ currencySymbol, className }) => {
  currencySymbol = currencySymbol ? currencySymbol : "$";
  return (
    <div className={className ? className : "total-amount"}>
      <div className="total-amount__currency-symbol-area">{currencySymbol}</div>
      <input
        className="total-amount__input"
        type="text"
        placeholder="25.000"
      ></input>
    </div>
  );
};

TotalAmount.propTypes = {
  currencySymbol: PropTypes.string,
  className: PropTypes.string,
};

export default TotalAmount;
