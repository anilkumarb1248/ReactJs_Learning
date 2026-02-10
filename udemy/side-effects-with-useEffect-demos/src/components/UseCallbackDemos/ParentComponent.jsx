"use no memo";

import React, { useCallback, useState } from "react";

import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(35);
  const [salary, setSalary] = useState(100000);

  //   const incrementAge = () => {
  //     setAge(age + 1);
  //   };

  //   const incrementSalary = () => {
  //     setSalary(salary + 10000);
  //   };

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleBtnClick={incrementAge}>Increament Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleBtnClick={incrementSalary}>Increament Salary</Button>
    </div>
  );
}
export default ParentComponent;
