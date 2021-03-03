import React, { useState } from "react";
import TotalAmount from "../common/TotalAmount";
import MonthlyAmount from "../common/MonthlyAmount";
import MonthPicker from "../common/MonthPicker";
import ReusableLogo from "../common/ReusableLogo";
import "../../styles/BuyAHouseForm.scss";
import HouseLogo from "../../images/houseLogo.png";
import {
  extractMonthFromDate,
  compareDatesWithoutTimezone,
  calculateRemainingMonths,
} from "../../utils";

const BuyAHouseForm = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [month, setMonth] = useState(extractMonthFromDate(new Date()));
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthPickerError, setMonthPickerError] = useState(false);
  const [remainingMonths, setRemainingMonths] = useState(0);

  const onConfirm = (event) => {
    event.preventDefault();
  };

  const handleBackClick = () => {
    const DECEMBER = 11;
    const JANUARY = 0;
    let newSelectedDate = new Date(selectedDate.getTime());
    const selectedMonth =
      newSelectedDate.getMonth() === JANUARY
        ? DECEMBER
        : newSelectedDate.getMonth() - 1;
    if (selectedMonth === DECEMBER) {
      newSelectedDate.setYear(newSelectedDate.getFullYear() - 1);
    }
    newSelectedDate.setMonth(selectedMonth);
    if (compareDatesWithoutTimezone(newSelectedDate, new Date())) {
      setMonthPickerError(true);
    } else {
      setSelectedDate(newSelectedDate);
      setMonth(extractMonthFromDate(newSelectedDate));
      setYear(newSelectedDate.getFullYear());
      setMonthPickerError(false);
      setRemainingMonths(calculateRemainingMonths(new Date(), newSelectedDate));
    }
  };

  const handleForwardClick = () => {
    const DECEMBER = 11;
    const JANUARY = 0;
    let newSelectedDate = new Date(selectedDate.getTime());
    const selectedMonth =
      newSelectedDate.getMonth() === DECEMBER
        ? JANUARY
        : newSelectedDate.getMonth() + 1;
    if (selectedMonth === JANUARY) {
      newSelectedDate.setYear(newSelectedDate.getFullYear() + 1);
    }
    newSelectedDate.setMonth(selectedMonth);
    setSelectedDate(newSelectedDate);
    setMonth(extractMonthFromDate(newSelectedDate));
    setYear(newSelectedDate.getFullYear());
    setMonthPickerError(false);
    setRemainingMonths(calculateRemainingMonths(new Date(), newSelectedDate));
  };

  const handleKeyDown = (event) => {
    event.key == "ArrowRight" && handleForwardClick();
    event.key == "ArrowLeft" && handleBackClick();
  };

  const handleAmountChange = (floatvalue) => {
    setTotalAmount(floatvalue);
  };

  return (
    <form onSubmit={onConfirm}>
      <div className="buy-a-house-form" onKeyDown={handleKeyDown} tabIndex="0">
        <div className="buy-a-house-form__reusable-logo">
          <ReusableLogo imagePath={HouseLogo}>
            <div className="buy-a-house-form__logo-title">
              <p className="buy-a-house-form__logo-first-label">Buy a House</p>
              <p className="buy-a-house-form__logo-second-label">Saving Goal</p>
            </div>
          </ReusableLogo>
        </div>
        <div className="buy-a-house-form__total-amount">
          <span>Total amount:</span>
          <TotalAmount amount={totalAmount} onChange={handleAmountChange} />
        </div>
        <div className="buy-a-house-form__month-picker">
          <span>Reach goal by:</span>
          <MonthPicker
            onForwardClick={handleForwardClick}
            onBackClick={handleBackClick}
            year={year}
            month={month}
            hasError={monthPickerError}
          />
        </div>
        <div className="buy-a-house-form__monthly-amount">
          <MonthlyAmount
            remainingMonths={remainingMonths}
            totalAmount={totalAmount}
            month={month}
            year={year}
          />
        </div>
        <div className="buy-a-house-form__button-area">
          <button
            type="submit"
            disabled={false}
            className="btn btn-primary buy-a-house-form__confirm-button"
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuyAHouseForm;
