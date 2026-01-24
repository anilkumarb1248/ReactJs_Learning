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
        // [inputIdentifier]: newValue,
        // Here we are getting the new value as string format, but we need number format
        // So, we need to covert string format to number format.
        // There are multiple ways to convert.
        //1. The Number() Constructor
        // [inputIdentifier]: Number(newValue),
        //2. The Unary Plus Operator (+): This is the fastest and shortest syntax. It works identically to Number().
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
      {/* <Results userInput={userInput} /> */}
    </>
  );
}

export default InvestmentCalculator;
