
// const Student = ({student:{name, standard, grade}}) =>{
//     name = "Manasvi";
//     return(
//         <>
//             <h3> Student Details</h3>
//             <h4>Name: {name}, Standard: {standard}, Grade: {grade}</h4>
//         </>
//     )
// }


const Student = ({student}) =>{
    student.name = "Hithiksha";
    return(
        <>
            <h3> Student Details</h3>
            <h4>Name: {student.name}, Standard: {student.standard}, Grade: {student.grade}</h4>
        </>
    )
}

// const Student = (props) =>{
//     return(
//         <>
//             <h3> Student Details</h3>
//             <h4>Name: {props.student.name}, Standard: {props.student.standard}, Grade: {props.student.grade}</h4>
//         </>
//     )
// }


// const Student = ({name='Anil', standard='5th', grade='C'}) =>{
//     return(
//         <>
//             <h3> Student Details</h3>
//             <h4>Name: {name}, Standard: {standard}, Grade: {grade}</h4>
//         </>
//     )
// }

// const Student = (props) =>{
//     return(
//         <>
//             <h3> Student Details</h3>
//             <h4>Name: {props.name}, Standard: {props.standard}, Grade: {props.grade}</h4>
//         </>
//     )
// }

export default Student;