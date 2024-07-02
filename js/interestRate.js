// U51313007
// interestRate.js

/**
 * Calculate the interest based on principle, rate and time.
 * @param {number} principle - The principle amount.
 * @param {number} rate - The interest rate (as a decimal, e.g. 0.05 for 5%).
 * @param {number} time - The time the money is invested or borrowed for.
 * @returns {number} The calculated interest.
 */

export function calculateInterest(principle, rate, time) {
    return principle * rate * time;
    }