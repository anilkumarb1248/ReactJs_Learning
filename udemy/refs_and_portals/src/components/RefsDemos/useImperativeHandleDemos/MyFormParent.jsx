import React, { useRef } from "react";
import MyForm from "./MyForm";

export function MyFormParent() {
  const formRef = useRef();

  function handleRestart() {
    if (formRef.current) {
      formRef.current.clear();
    }
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <MyForm ref={formRef} />
    </div>
  );
}

export default MyFormParent;
