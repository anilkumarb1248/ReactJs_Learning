import React, { useMemo, useState } from "react";

const findNumberEvenOrOdd = (number) => {
  console.log("Finding number is even or odd, number: ", number);
  let i = 0;
  console.log("Entering into the long loop");
  while (i <= 2000000000) i++;
  console.log("After completing the long loop");
  return number % 2 == 0;
};
function EvenOrOddNumberFinder() {
  const [fristCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const incrementFirstCounter = () => {
    setFirstCounter((fristCounter) => fristCounter + 1);
  };
  const incrementSecondCounter = () => {
    setSecondCounter((secondCounter) => secondCounter + 1);
  };

  const isEven = useMemo(() => {
    return findNumberEvenOrOdd(fristCounter);
  }, [fristCounter]);

  return (
    <div>
      <h3>Even or Odd Number Finder</h3>
      <div>
        <button onClick={incrementFirstCounter}>
          First Counter: {fristCounter}
        </button>
        <span> {isEven ? "Even" : "Odd"} </span>
      </div>
      <div>
        <button onClick={incrementSecondCounter}>
          Second Counter: {secondCounter}
        </button>
      </div>
    </div>
  );
}

export default EvenOrOddNumberFinder;
