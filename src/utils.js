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

export function calculateRemainingMonths(currentDate, futureDate) {
  const yearsDifference = futureDate.getFullYear() - currentDate.getFullYear();
  const monthsDifference = futureDate.getMonth() - currentDate.getMonth();
  return yearsDifference * 12 + monthsDifference;
}

export function calculateMonthlyPayment(numberOfMonths, totalAmount) {
  if (numberOfMonths === 0 || (numberOfMonths > 0 && totalAmount === 0)) {
    return parseFloat(totalAmount).toFixed();
  } else if (numberOfMonths > 0 && totalAmount > 0) {
    return parseFloat(totalAmount / numberOfMonths).toFixed();
  }
}

export function calculateNumberOfDeposits(numberOfMonths, totalAmount) {
  if (totalAmount === 0) {
    return "0 monthly deposits";
  }
  if (numberOfMonths === 0 && totalAmount > 0) {
    return "1 instant deposit";
  } else if (numberOfMonths > 0 && totalAmount > 0) {
    return numberOfMonths > 1
      ? `${numberOfMonths} monthly deposits`
      : `${numberOfMonths} monthly deposit`;
  }
}
