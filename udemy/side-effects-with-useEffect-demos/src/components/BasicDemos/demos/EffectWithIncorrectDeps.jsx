import React, { useEffect, useState } from "react";

function EffectWithIncorrectDeps() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1); // This will update the count only once.
    setCount((prevCount) => prevCount + 1); // This is the correct way to update state based on the previous state, ensuring that the count increments correctly every second.
  };

  useEffect(() => {
    console.log(
      "UseEffect with incorrect dependencies in EffectWithIncorrectDeps component",
    );
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    // }); // Runs every time the component re-renders, which is not intended. It should have an empty dependency array to run only once on mount.
  }, []); // Runs only once on mount, which is the correct way to set up this effect.
  // }, [count]); // This will cause the effect to run every time 'count' changes, which is not intended. It should have an empty dependency array to run only once on mount.

  return (
    <div>
      <h3>Effect with Incorrect Deps</h3>
      <p>Count: {count}</p>
    </div>
  );
}

export default EffectWithIncorrectDeps;
