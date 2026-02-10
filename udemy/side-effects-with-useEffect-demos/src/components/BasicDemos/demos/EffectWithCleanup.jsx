import React, { useEffect, useState } from "react";

function EffectWithCleanup() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Updating the mouse position in EffectWithCleanup component");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Component mounted, setting up event listener");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounted, cleanup done");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h3>Effect with Cleanup</h3>
      <h3>
        Coardinates(X,Y) - ({X}, {Y})
      </h3>
    </div>
  );
}

export default EffectWithCleanup;
