import { useState } from "react";

function UserInput() {

    const[userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handelInputChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required 
                value={userInput.initialInvestment}
                onChange={(event) => handelInputChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required 
                value={userInput.annualInvestment}
                onChange={(event) => handelInputChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required 
                value={userInput.expectedReturn}
                onChange={(event) => handelInputChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                value={userInput.duration}
                onChange={(event) => handelInputChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
    )
}

export default UserInput;