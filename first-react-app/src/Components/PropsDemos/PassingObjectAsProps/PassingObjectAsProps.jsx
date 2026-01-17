import React from "react";
import Student from "./Student";

function PassingObjectAsProps() {
  const student = {
    name: "Anil Kumar Bandari",
    // standard: "5th",
    grade: "D",
  };

  return (
    <div>
      <div>
        <h2>Passing Object as Props Demos </h2>
      </div>

      <div>
        <Student student={student} />
      </div>
    </div>
  );
}

export default PassingObjectAsProps;
