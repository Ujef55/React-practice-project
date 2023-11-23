import {calculateInvestmentResults} from '../util/investment.js';

function Results({ userInputData }) {
    const resultsData = calculateInvestmentResults(userInputData);
    console.log(resultsData);
}

export default Results;