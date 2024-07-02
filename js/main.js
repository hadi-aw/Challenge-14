// main.js
import { calculateInterest} from `./interestRate.js`;
import { calculateLoanPayment } from `./loanPayment.js`;
import { calculateInvestmentReturn } from `./investmentReturn.js`;

/**
 * Validate that all inputs are numbers and greater than zero.
 * @param {Array} inputs - The array of input values to validate.
 * @returns {boolean} Returns true if all inputs are valid, otherwise false.
    */ 

function validateInputs(inputs) {
    return inputs.every(input => !isNaN(input) && input > 0);
}

// Event listener for calulating interest
document.getElementById('calculate-interest').addEventListener('click', () => {
    const principle = parseFloat(document.getElementById('principle-interest').value);
    const rate = parseFloat(document.getElementById('rate-interest').value);
    const time = parseFloat(document.getElementById('time-interest').value);

    if (validateInputs([principle, rate, time])) {
        const result = calculateInterest(principle, rate, time);
        document.getElementById('result-interest').innerText = `Interest: ${result.toFixed(2)}`;
    } else {
        alert('Please enter validinputs for Interest calculation.')
    }
});

// Event listener for calculating loan payment
document.getElementById('calculate-loan').addEventListener('click', () => {
    const principle = parseFloat(document.getElementById('principle-loan').value);
    const rate = parseFloat(document.getElementById('rate-loan').value);
    const time = parseFloat(document.getElementById('time-loan').value);

    if (validateInputs([principle, rate, time])) {
        const result = calculateLoanPayment(principle, rate, time);
        document.getElementById('result-loan').innerText = `Monthly Payment: ${result.toFixed(2)}`;
    } else {
        alert('Please enter valid inputs for Loan calculation.');
    }
});

// Event listener for calculating investment return
document.getElementById('calculate-investment').addEventListener('click', () => {
    const principle = parseFloat(document.getElementById('principle-investment').value);
    const rate = parseFloat(document.getElementById('rate-investment').value);
    const time = parseFloat(document.getElementById('time-investment').value);

    if (validateInputs([principle, rate, time])) {
        const result = calculateInvestmentReturn(principle, rate, time);
        document.getElementById('result-investment').innerText = `Future Value: ${result.toFixed(2)}`;
    } else {
        alert('Please enter valid inputs for Investment calculation.');
    }
});