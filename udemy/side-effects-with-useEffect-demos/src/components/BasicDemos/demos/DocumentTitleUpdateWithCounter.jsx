import React, { useEffect, useState } from "react";

function DocumentTitleUpdateWithCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(
      "Updating document title in DocumentTitleUpdateWithCounter component",
    );
    setTimeout(() => {
      document.title = `Count: ${count}`;
    }, 2000);

    return () => {
      console.log(
        "Running code cleanup in DocumentTitleUpdateWithCounter component",
      );
      document.title = "Side Effects with useEffect";
    };
  }, [count]);

  return (
    <div>
      <h3>Document Title Update with Counter</h3>
      <p>
        <b>Note: </b> When you move out of this component, the title will be
        updated back to "Side Effects with useEffect" because of the cleanup
        function in the useEffect hook.
      </p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Counter
      </button>
    </div>
  );
}

export default DocumentTitleUpdateWithCounter;
