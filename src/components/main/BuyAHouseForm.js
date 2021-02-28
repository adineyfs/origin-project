import React, { Component } from "react";
import TotalAmount from "../common/TotalAmount";
import MonthlyAmount from "../common/MonthlyAmount";
import MonthPicker from "../common/MonthPicker";
import ReusableLogo from "../common/ReusableLogo";
import "../../styles/BuyAHouseForm.scss";

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
            <ReusableLogo />
          </div>
          <div className="buy-a-house-form__total-amount">
            <TotalAmount />
          </div>
          <div className="buy-a-house-form__month-picker">
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
            ></button>
          </div>
        </div>
      </form>
    );
  }
}

export default BuyAHouseForm;
