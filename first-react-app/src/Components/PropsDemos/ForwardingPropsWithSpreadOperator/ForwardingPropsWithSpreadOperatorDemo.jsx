import React from "react";
import Profile from "./Profile";

function ForwardingPropsWithSpreadOperatorDemo() {
  const profile = {
    // Basic Personal Information
    firstName: "Anil Kumar",
    lastName: "Bandari",
    fullName: "Anil Kumar Bandari",
    age: "35",
    gender: "Male",
    dateOfBirth: "11 May 1990",

    // Contact Information
    email: "abc@test.com",
    phoneNumber: "9876543210",
    address: "Patancheru",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    zipCode: "123456",
  };

  return (
    <div>
      <h2> Forwarding Props with Spread Operator Demo </h2>
      <Profile profile={profile} />
    </div>
  );
}

export default ForwardingPropsWithSpreadOperatorDemo;
