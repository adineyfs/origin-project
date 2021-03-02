import React, { Component } from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../../styles/MonthPicker.scss";
import { extractMonthFromDate } from "../../utils";
class MonthPicker extends Component {
  state = {
    currentDate: new Date(),
    month: extractMonthFromDate(new Date()),
    year: new Date().getFullYear(),
  };

  onBackClick = () => {
    const currentDate = Date.now();
    let newDate = new Date(this.state.currentDate.getTime());
    const previousMonth =
      newDate.getMonth() === 0 ? 11 : newDate.getMonth() - 1;
    if (previousMonth === 11) {
      newDate.setYear(newDate.getFullYear() - 1);
    }
    newDate.setMonth(previousMonth);
    if (newDate < currentDate) {
      window.alert("NO");
    } else {
      this.setState({
        currentDate: newDate,
        month: extractMonthFromDate(newDate),
        year: newDate.getFullYear(),
      });
      this.props.onChange(newDate);
    }
  };

  onForwardClick = () => {
    let newDate = new Date(this.state.currentDate.getTime());
    const nextMonth = newDate.getMonth() === 11 ? 0 : newDate.getMonth() + 1;
    if (nextMonth === 0) {
      newDate.setYear(newDate.getFullYear() + 1);
    }
    newDate.setMonth(nextMonth);
    this.setState({
      currentDate: newDate,
      month: extractMonthFromDate(newDate),
      year: newDate.getFullYear(),
    });
  };

  render() {
    return (
      <div className="month-picker">
        <div
          className="month-picker__arrow-button month-picker__arrow-button--left"
          onClick={this.onBackClick}
        >
          <ArrowBackIosIcon color="disabled" />
        </div>
        <div className="month-picker__month-label">{this.state.month}</div>
        <div className="month-picker__year-label">{this.state.year}</div>
        <div
          className="month-picker__arrow-button month-picker__arrow-button--right"
          onClick={this.onForwardClick}
        >
          <ArrowForwardIosIcon color="disabled" />
        </div>
      </div>
    );
  }
}

MonthPicker.propTypes = {
  onChange: PropTypes.func,
};

export default MonthPicker;
