// U51313007
// loanPayment.js

/**
 * Calculate the monthly loan payment.
 * @param {number} principle - The loan principle amount.
 * @param {number} rate - The annual interest rate (as a decimal, e.g. 0.05 for 5%).
 * @param {number} time - The calculated monthly loan payment.
 * @returns {number} The calculated monthly loan payment.
 */

export function calculateLoanPayment(principle, rate, time) {
    const monthlyRate = rate / 12 / 100;
    const numberOfPayments = time * 12;
    return principle * (monthlyRate * Math.pow((1 + monthlyRate), numberOfPayments)) / (Math.pow((1 + monthlyRate, numberOfPayments) - 1
}