import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../../styles/MonthPicker.scss";

const MonthPicker = ({
  hasError,
  onBackClick,
  onForwardClick,
  errorMessage,
  year,
  month,
}) => {
  return (
    <>
      <div
        className={`month-picker ${
          hasError ? "month-picker__month-error" : ""
        }`}
      >
        <div
          className="month-picker__arrow-button month-picker__arrow-button--left"
          onClick={onBackClick}
        >
          <ArrowBackIosIcon color="disabled" />
        </div>
        <div className="month-picker__month-label">{month}</div>
        <div className="month-picker__year-label">{year}</div>
        <div
          className="month-picker__arrow-button month-picker__arrow-button--right"
          onClick={onForwardClick}
        >
          <ArrowForwardIosIcon color="disabled" />
        </div>
      </div>
      <span
        className={
          hasError
            ? "month-picker__month-error-text"
            : "month-picker__month-error-text-clear"
        }
      >
        {errorMessage || "Only future dates"}
      </span>
    </>
  );
};

MonthPicker.propTypes = {
  errorMessage: PropTypes.string,
  onForwardClick: PropTypes.func,
  onBackClick: PropTypes.func,
  hasError: PropTypes.bool,
  year: PropTypes.number,
  month: PropTypes.string,
};

export default MonthPicker;
