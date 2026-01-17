const Contact = (props) => {
  //   console.log(props);
  return (
    <>
      <h3> *** Contact Details from Contact Component *** </h3>
      <b>Email:</b> {props.profile.email} <br />
      <b>Phone Number:</b> {props.profile.phoneNumber} <br />
      <b>Address:</b> {props.profile.address} <br />
      <b>City:</b> {props.profile.city} <br />
      <b>State:</b> {props.profile.state} <br />
      <b>Country:</b> {props.profile.country} <br />
      <b>Zip Code:</b> {props.profile.zipCode} <br />
    </>
  );
};

export default Contact;
