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
                <input />
            </p>
            <p>
                <label>Annual Investment</label>
                <input />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input />
            </p>
            <p>
                <label>Duration</label>
                <input />
            </p>
        </div>
    </section>
    )
}

export default UserInput;