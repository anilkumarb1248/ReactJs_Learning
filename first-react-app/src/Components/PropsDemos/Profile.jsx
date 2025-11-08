
import Contact from "./Contact";

const Profile = (props) =>{
    return(
        <>
            <h2> Profile Details </h2>
            <h5> First Name: {props.profile.firstName} </h5>
            <h5> Last Name: {props.profile.lastName} </h5>
            <h5> Full Name: {props.profile.fullName} </h5>
            <h5> Age: {props.profile.age} </h5>
            <h5> Gender: {props.profile.gender} </h5>
            <h5> DOB: {props.profile.dateOfBirth} </h5>
            <Contact {...props}/>
        </>
    )
}

export default Profile;