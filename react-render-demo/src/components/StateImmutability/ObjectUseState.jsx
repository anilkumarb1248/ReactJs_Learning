import React, { useState } from "react";

const initialState = {
  firstName: "Hithiksha",
  lastName: "Bandari",
};

function ObjectUseState() {
  const [person, setPerson] = useState(initialState);

  const updatePerson = () => {
    // ***** Direct Mutation
    // person.firstName = "Anusha";
    // person.lastName = "Peddaboina";
    // setPerson(person);

    // *****  Maintain immutability
    const newPerson = { ...person }; // Copy existing properties
    newPerson.firstName = "Anusha";
    newPerson.lastName = "Peddaboina";
    setPerson(newPerson);
  };

  const updateSamePerson = () => {
    const newPerson = { ...person }; // Copy existing properties
    newPerson.firstName = "Hithiksha";
    newPerson.lastName = "Bandari";
    setPerson(newPerson);
  };

  console.log("ObjectUseState Render");

  return (
    <div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={updatePerson}>Update Person </button>
      <button onClick={updateSamePerson}>
        Update Person with Initial Data
      </button>
    </div>
  );
}

export default ObjectUseState;
