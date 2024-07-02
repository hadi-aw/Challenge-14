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

