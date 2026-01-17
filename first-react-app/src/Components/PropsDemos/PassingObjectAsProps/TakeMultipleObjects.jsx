import React from "react";

function TakeMultipleObjects({ user, person, student }) {
  return (
    <div>
      <h3> User Details</h3>
      <div>
        <b>Name:</b> {user.name} <br />
        <b>Age:</b> {user.age} <br />
      </div>

      <h3> Person Details</h3>
      <div>
        <b>Name:</b> {person.name} <br />
        <b>Age:</b> {person.age} <br />
      </div>

      <h3> Student Details</h3>
      <div>
        <b>Name:</b> {student.name} <br />
        <b>Age:</b> {student.age} <br />
      </div>
    </div>
  );
}

export default TakeMultipleObjects;
