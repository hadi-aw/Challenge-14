// U51313007
// investmentReturn.js

/**
 * Calculate the future value of an investment.
 * @param {number} principle - The initial amount of money.
 * @param {number} rate - The annual interest rate (as a decimal, e.g. 0.05 for 5%).
 * @param {number} time - The number of years the money is invested for.
 * @returns {number} The future value of the investment.
 */

export function calculateInvestmentReturn(principle, rate, time) {
    const ratePerPeriod = rate / 100;
    return principle * Math.pow((1 + ratePerPeriod), time);
}