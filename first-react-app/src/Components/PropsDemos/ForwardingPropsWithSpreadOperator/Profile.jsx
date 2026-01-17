import Contact from "./Contact";

const Profile = (props) => {
  return (
    <>
      <h3> *** Profile Details from Profile Component *** </h3>
      <b>First Name:</b> {props.profile.firstName} <br />
      <b>Last Name:</b> {props.profile.lastName} <br />
      <b>Full Name:</b> {props.profile.fullName} <br />
      <b>Age:</b> {props.profile.age} <br />
      <b>Gender:</b> {props.profile.gender} <br />
      <b>DOB:</b> {props.profile.dateOfBirth} <br />
      <Contact {...props} />
    </>
  );
};

export default Profile;
