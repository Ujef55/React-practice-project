import {calculateInvestmentResults} from '../util/investment.js';

function Results({ userInputData }) {
    const resultsData = calculateInvestmentResults(userInputData);
    console.log(resultsData);
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(everyYearData => {
                    return <tr key={everyYearData.year}>
                        <td>{everyYearData.year}</td>
                        <td>{everyYearData.valueEndOfYear}</td>
                        <td>{everyYearData.interest}</td>
                        <td></td>
                        <td></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results;