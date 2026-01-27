import React, { useImperativeHandle, useRef } from "react";

function MyInput({ props, ref }) {
  const inputRef = useRef();

  // This is what the parent will see
  // useImperativeHandle(ref, createHandle, [deps]).
  useImperativeHandle(ref, () => {
    return {
      focusInput() {
        inputRef.current.focus();
      },
      shake() {
        console.log("Shaking the input...");
        // Logic for animation would go here
      },
    };
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default MyInput;
