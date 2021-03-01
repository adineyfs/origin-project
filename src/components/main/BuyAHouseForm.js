import React, { Component } from "react";
import TotalAmount from "../common/TotalAmount";
import MonthlyAmount from "../common/MonthlyAmount";
import MonthPicker from "../common/MonthPicker";
import ReusableLogo from "../common/ReusableLogo";
import "../../styles/BuyAHouseForm.scss";
import HouseLogo from "../../images/houseLogo.png";

class BuyAHouseForm extends Component {
  state = {
    totalAmount: 0,
  };

  onConfirm = () => {
    window.alert("uou");
  };

  render() {
    return (
      <form onSubmit={this.onConfirm}>
        <div className="buy-a-house-form">
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
            <TotalAmount />
          </div>
          <div className="buy-a-house-form__month-picker">
            <span>Reach goal by:</span>
            <MonthPicker />
          </div>
          <div className="buy-a-house-form__monthly-amount">
            <MonthlyAmount />
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
