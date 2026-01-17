import React, { useState } from "react";

const initialState = ["Anil", "Mansvi"];

function ArrayUseState() {
  const [persons, setPersons] = useState(initialState);

  const addPersons = () => {
    // ***** Direct Mutation
    // persons.push("Hithiksha");
    // persons.push("Shreetan");
    // setPersons(persons);

    // *****  Maintain immutability
    const newPersons = [...persons];
    newPersons.push("Hithiksha");
    newPersons.push("Shreetan");
    setPersons(newPersons);
  };
  console.log("ArrayUseState Render");
  return (
    <div>
      <button onClick={addPersons}>Add Persons </button>
      <div>
        {persons.map((person) => (
          <p key={person}>{person}</p>
        ))}
      </div>
    </div>
  );
}

export default ArrayUseState;
