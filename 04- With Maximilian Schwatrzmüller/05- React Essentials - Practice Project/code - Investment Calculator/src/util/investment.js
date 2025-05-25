/*
  This function expects a JS object as an argument, the object should contain the following properties:
  - investment: The initial investment amount
  - annualInvestment: The amount invested every year
  - expectedReturn: The expected (annual) rate of return
  - duration: The investment duration (time frame)
*/

export const calculateInvestmentResults = ({
  investment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  const annualData = [];
  let investmentValue = investment;

  for (let counter = 0; counter < duration; counter++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: counter + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment, // investment added in this year
    });
  }

  return annualData;
};

/* 
  The browser-provided Intl API is used to prepare a formatter object
  This object offers a "format()" method that can be used to format numbers as currency
  Example Usage: formatter.format(1000) => yields "$1,000"
*/
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
