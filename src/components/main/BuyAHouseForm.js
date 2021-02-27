import React, { Component } from "react";
import TotalAmount from "../common/TotalAmount";
import MonthlyAmount from "../common/MonthlyAmount";
import MonthPicker from "../common/MonthPicker";
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
        <div className="container">
          <h2>Buy a House</h2>
          <TotalAmount />
          <MonthPicker />
          <MonthlyAmount />
          <button
            type="submit"
            disabled={false}
            className="btn btn-primary"
          ></button>
        </div>
      </form>
    );
  }
}

export default BuyAHouseForm;
