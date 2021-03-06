import React from "react";
import PropTypes from "prop-types";
import CurrencyInput from "react-currency-input";
import "../../styles/TotalAmount.scss";

const TotalAmount = ({ amount, currencySymbol, onChange, className }) => {
  currencySymbol = currencySymbol ? currencySymbol : "$";
  return (
    <div className={className}>
      <div className="total-amount__currency-symbol-area">{currencySymbol}</div>

      <CurrencyInput
        className="total-amount__input"
        value={amount}
        onChangeEvent={(event, maskedvalue, floatvalue) => onChange(floatvalue)}
        precision="0"
      />
    </div>
  );
};

TotalAmount.propTypes = {
  currencySymbol: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  amount: PropTypes.number,
};

TotalAmount.defaultProps = {
  currencySymbol: "$",
  className: "total-amount",
  onChange: () => {},
  amount: 0,
};

export default TotalAmount;
