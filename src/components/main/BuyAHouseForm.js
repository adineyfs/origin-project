import React, { Component } from "react";
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

class BuyAHouseForm extends Component {
  state = {
    totalAmount: 0,
    selectedDate: new Date(),
    month: extractMonthFromDate(new Date()),
    year: new Date().getFullYear(),
    monthPickerError: false,
    remainingMonths: 0,
  };

  onConfirm = (event) => {
    event.preventDefault();
  };

  calculateRemainingMonths = () => {
    let currentDate = new Date();
    const currentDateYear = currentDate.getFullYear();
    const currentDateMonth = currentDate.getMonth();
    const selectedDateYear = this.state.selectedDate.getFullYear();
    const selectedDateMonth = this.state.selectedDate.getMonth();
    const yearsDifference = selectedDateYear - currentDateYear;
    const monthsDifference = selectedDateMonth - currentDateMonth;
    return yearsDifference * 12 + monthsDifference;
  };

  handleBackClick = () => {
    const DECEMBER = 11;
    const JANUARY = 0;
    let newSelectedDate = new Date(this.state.selectedDate.getTime());
    const selectedMonth =
      newSelectedDate.getMonth() === JANUARY
        ? DECEMBER
        : newSelectedDate.getMonth() - 1;
    if (selectedMonth === DECEMBER) {
      newSelectedDate.setYear(newSelectedDate.getFullYear() - 1);
    }
    newSelectedDate.setMonth(selectedMonth);
    if (compareDatesWithoutTimezone(newSelectedDate, new Date())) {
      this.setState({ monthPickerError: true });
    } else {
      this.setState({
        selectedDate: newSelectedDate,
        month: extractMonthFromDate(newSelectedDate),
        year: newSelectedDate.getFullYear(),
        monthPickerError: false,
        remainingMonths: calculateRemainingMonths(new Date(), newSelectedDate),
      });
    }
  };

  handleForwardClick = () => {
    const DECEMBER = 11;
    const JANUARY = 0;
    let newSelectedDate = new Date(this.state.selectedDate.getTime());
    const selectedMonth =
      newSelectedDate.getMonth() === DECEMBER
        ? JANUARY
        : newSelectedDate.getMonth() + 1;
    if (selectedMonth === JANUARY) {
      newSelectedDate.setYear(newSelectedDate.getFullYear() + 1);
    }
    newSelectedDate.setMonth(selectedMonth);
    this.setState({
      selectedDate: newSelectedDate,
      month: extractMonthFromDate(newSelectedDate),
      year: newSelectedDate.getFullYear(),
      monthPickerError: false,
      remainingMonths: calculateRemainingMonths(new Date(), newSelectedDate),
    });
  };

  handleKeyDown = (event) => {
    event.key == "ArrowRight" && this.handleForwardClick();
    event.key == "ArrowLeft" && this.handleBackClick();
  };

  handleAmountChange = (floatvalue) => {
    this.setState({ totalAmount: floatvalue });
  };

  render() {
    return (
      <form onSubmit={this.onConfirm}>
        <div
          className="buy-a-house-form"
          onKeyDown={this.handleKeyDown}
          tabIndex="0"
        >
          <div className="buy-a-house-form__reusable-logo">
            <ReusableLogo imagePath={HouseLogo}>
              <div className="buy-a-house-form__logo-title">
                <p className="buy-a-house-form__logo-first-label">
                  Buy a House
                </p>
                <p className="buy-a-house-form__logo-second-label">
                  Saving Goal
                </p>
              </div>
            </ReusableLogo>
          </div>
          <div className="buy-a-house-form__total-amount">
            <span>Total amount:</span>
            <TotalAmount
              amount={this.state.totalAmount}
              onChange={this.handleAmountChange}
            />
          </div>
          <div className="buy-a-house-form__month-picker">
            <span>Reach goal by:</span>
            <MonthPicker
              onForwardClick={this.handleForwardClick}
              onBackClick={this.handleBackClick}
              year={this.state.year}
              month={this.state.month}
              hasError={this.state.monthPickerError}
            />
          </div>
          <div className="buy-a-house-form__monthly-amount">
            <MonthlyAmount
              remainingMonths={this.state.remainingMonths}
              totalAmount={this.state.totalAmount}
              month={this.state.month}
              year={this.state.year}
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
  }
}

export default BuyAHouseForm;
