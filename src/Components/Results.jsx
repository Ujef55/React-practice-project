import {calculateInvestmentResults} from '../util/investment.js';
import { formatter } from '../util/investment.js';

function Results({ userInputData }) {
    const resultsData = calculateInvestmentResults(userInputData);
    const initialInvestment = 
     resultsData[0].valueEndOfYear -
     resultsData[0].interest - 
     resultsData[0].annualInvestment;


    console.log(resultsData);
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(everyYearData => {

         const totalInterest = 
            everyYearData.valueEndOfYear - 
            everyYearData.annualInvestment * 
            everyYearData.year - initialInvestment;

        const totalInvestedAmount = everyYearData.valueEndOfYear - totalInterest;    


        return <tr key={everyYearData.year}>
                  <td>{everyYearData.year}</td>
                  <td>{formatter.format(everyYearData.valueEndOfYear)}</td>
                  <td>{formatter.format(everyYearData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalInvestedAmount)}</td>
                </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results;