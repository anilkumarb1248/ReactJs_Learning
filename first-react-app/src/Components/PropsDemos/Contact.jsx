
const Contact = (props) =>{
    console.log(props)
    return(
        <>
            <h3> Contact Details </h3>
            <h5> Email: {props.profile.email} </h5>
            <h5> Phone Number: {props.profile.phoneNumber} </h5>
            <h5> Address: {props.profile.address} </h5>
            <h5> City: {props.profile.city} </h5>
            <h5> State: {props.profile.state} </h5>
            <h5> Country: {props.profile.country} </h5>
            <h5> ZipCode: {props.profile.zipCode} </h5>
        </>

    )
}

export default Contact;