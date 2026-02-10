import React, { useEffect, useState } from "react";

function MultipleEffects({ userId }) {
  const [name, setName] = useState("Guest");
  const [userData, setUserData] = useState(null);

  // Effect 1: Sync the document title
  // Only runs when the 'name' state changes
  useEffect(() => {
    document.title = `Profile: ${name}`;
    console.log("Title updated!");
  }, [name]);

  // Effect 2: Fetch data from an API
  // Only runs when 'userId' prop changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.example.com/user/${userId}`);
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
    console.log("Data fetched!");
  }, [userId]);

  return (
    <div>
      <h3>Multiple Effects</h3>
      <h1>Hello, {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Change name"
      />
      {userData ? <p>Bio: {userData.bio}</p> : <p>Loading bio...</p>}
    </div>
  );
}

export default MultipleEffects;
