import React from "react";

// // Getting the student details using props (as props.student.name)
// function Student(props) {
//   return (
//     <div>
//       <h3> Student Details</h3>
//       <div>
//         <b>Name:</b> {props.student.name} <br />
//         <b>Standard:</b> {props.student.standard} <br />
//         <b>Grade:</b> {props.student.grade} <br />
//       </div>
//     </div>
//   );
// }

// // Destructuring the student object from props (we can use as student.name)
// function Student({ student }) {
//   return (
//     <div>
//       <h3> Student Details</h3>
//       <div>
//         <b>Name:</b> {student.name} <br />
//         <b>Standard:</b> {student.standard} <br />
//         <b>Grade:</b> {student.grade} <br />
//       </div>
//     </div>
//   );
// }

// // Destructuring the student object values from student (we can use as name)
// function Student({ student: { name, standard, grade } }) {
//   return (
//     <div>
//       <h3> Student Details</h3>
//       <div>
//         <b>Name:</b> {name} <br />
//         <b>Standard:</b> {standard} <br />
//         <b>Grade:</b> {grade} <br />
//       </div>
//     </div>
//   );
// }

// Destructuring the student object values and providing default values
// These default values will be used if any property data missing in the student object.
function Student({
  student: { name = "Anil", standard = "MCA", grade = "C" },
}) {
  return (
    <div>
      <h3> Student Details</h3>
      <div>
        <b>Name:</b> {name} <br />
        <b>Standard:</b> {standard} <br />
        <b>Grade:</b> {grade} <br />
      </div>
    </div>
  );
}

export default Student;
