import React from "react";
import TakeMultipleObjects from "./TakeMultipleObjects";

function PassingMultipleObjectsDemo() {
  const user = {
    name: "Anil",
    age: 35,
  };

  const person = {
    name: "Shreetan",
    age: 3,
  };
  const student = {
    name: "Hithiksha",
    age: 5,
  };

  return (
    <div>
      <h2>Passing Multiple Objects As Props Demo</h2>
      <TakeMultipleObjects user={user} person={person} student={student} />
    </div>
  );
}

export default PassingMultipleObjectsDemo;
