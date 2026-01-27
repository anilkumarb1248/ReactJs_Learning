import React, { useRef } from "react";
import MyInput from "./MyInput";

function InputParent() {
  const customRef = useRef();
  return (
    <div>
      <MyInput ref={customRef} />
      <button onClick={() => customRef.current.focusInput()}>
        Focus the Child
      </button>
      <button onClick={() => customRef.current.shake()}>Shake the Child</button>
    </div>
  );
}

export default InputParent;
