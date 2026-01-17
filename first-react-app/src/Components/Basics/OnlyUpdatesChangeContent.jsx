import React, { useState } from "react";

//// Code to verify react only updates the changed content, not whole UI.
//// In this example, If you see in the browser tools, it will only updates the time,
//// instead of updating the whole UI like div, h2 and h3.
function OnlyUpdatesChangeContent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>
      <h2>Hello Bandari, You are in OnlyUpdatesChangeContent Component </h2>
      <h3>Current Time: {time}</h3>
    </div>
  );
}

export default OnlyUpdatesChangeContent;
