import React, { useState } from "react";
import UserInput from "./UserInput";
import Results from "./Results";

function InvestmentCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isUserInputValid = userInput.duration >= 1;

  const handleUserInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <UserInput
        userInput={userInput}
        handleUserInputChange={handleUserInputChange}
      />
      {!isUserInputValid && (
        <p className="center"> Please enter the duration greater than Zero</p>
      )}
      {isUserInputValid && <Results userInput={userInput} />}
    </>
  );
}

export default InvestmentCalculator;
