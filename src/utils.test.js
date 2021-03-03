import {
  extractMonthFromDate,
  compareDatesWithoutTimezone,
  calculateRemainingMonths,
  calculateMonthlyPayment,
  calculateNumberOfDeposits,
} from "./utils";

describe("Testing util functions", () => {
  it("extractMonthFromDate test", () => {
    const mockDate = new Date("2021-03-01T00:00:00");
    expect(extractMonthFromDate(mockDate)).toBe("March");
  });

  it("compareDatesWithoutTimezone test", () => {
    let mockPastDate = new Date("2021-03-01T12:00:00");
    const mockFutureDateWithHoursOfDifference = new Date("2021-03-01T18:00:00");
    expect(
      compareDatesWithoutTimezone(
        mockPastDate,
        mockFutureDateWithHoursOfDifference
      )
    ).toBe(false);

    mockPastDate = new Date("2021-03-01T12:00:00");
    const mockFutureDate = new Date("2021-04-01T12:00:00");
    expect(compareDatesWithoutTimezone(mockPastDate, mockFutureDate)).toBe(
      true
    );
  });

  it("calculateRemainingMonths test", () => {
    const mockPastDate = new Date("2021-03-01T00:00:00");
    const mockFutureDate = new Date("2021-11-01T00:00:00");
    expect(calculateRemainingMonths(mockPastDate, mockFutureDate)).toBe(8);
  });

  it("calculateMonthlyPayment test", () => {
    const numberOfMonths = 10;
    const totalAmount = 50000;
    expect(calculateMonthlyPayment(numberOfMonths, totalAmount)).toBe("5000");
  });

  it("calculateNumberOfDeposits test", () => {
    let numberOfMonths = 10;
    let totalAmount = 50000;
    expect(calculateNumberOfDeposits(numberOfMonths, totalAmount)).toBe(
      `${numberOfMonths} monthly deposits`
    );

    numberOfMonths = 1;
    expect(calculateNumberOfDeposits(numberOfMonths, totalAmount)).toBe(
      "1 monthly deposit"
    );

    numberOfMonths = 0;
    expect(calculateNumberOfDeposits(numberOfMonths, totalAmount)).toBe(
      "1 instant deposit"
    );

    totalAmount = 0;
    expect(calculateNumberOfDeposits(numberOfMonths, totalAmount)).toBe(
      "0 monthly deposits"
    );
  });
});
