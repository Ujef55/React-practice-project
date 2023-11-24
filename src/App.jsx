import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {

  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

const inputIsValid = userInput.duration >= 1;

function handelInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
}


  return (
    <>
        <Header />
        <UserInput userInputData={userInput}  onChangeInput={handelInputChange} />
        {!inputIsValid && <p className="center">Please enter a valid duration. Thank you.</p>}
        {inputIsValid && <Results userInputData={userInput} />}
    </>
  )
}

export default App
