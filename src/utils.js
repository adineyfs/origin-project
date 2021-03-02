export function extractMonthFromDate(date) {
  let month;
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

    default:
      break;
  }
  return month;
}

export function compareDatesWithoutTimezone(dateA, dateB) {
  return new Date(dateA.toDateString()) < new Date(dateB.toDateString());
}

export function calculateRemainingMonths(dateA, dateB) {
  const currentDateYear = dateA.getFullYear();
  const currentDateMonth = dateA.getMonth();
  const selectedDateYear = dateB.getFullYear();
  const selectedDateMonth = dateB.getMonth();
  const yearsDifference = selectedDateYear - currentDateYear;
  const monthsDifference = selectedDateMonth - currentDateMonth;
  return yearsDifference * 12 + monthsDifference;
}

export function calculateMonthlyPayment(remainingMonths, totalAmount) {
  if (remainingMonths === 0 || (remainingMonths > 0 && totalAmount === 0)) {
    return parseFloat(totalAmount).toFixed();
  } else if (remainingMonths > 0 && totalAmount > 0) {
    return parseFloat(totalAmount / remainingMonths).toFixed();
  }
}

export function calculateNumberOfDeposits(remainingMonths, totalAmount) {
  if (totalAmount === 0) {
    return "0 monthly deposits";
  }
  if (remainingMonths === 0 && totalAmount > 0) {
    return "1 instant deposit";
  } else if (remainingMonths > 0 && totalAmount > 0) {
    return remainingMonths > 1
      ? `${remainingMonths} monthly deposits`
      : `${remainingMonths} monthly deposit`;
  }
}
