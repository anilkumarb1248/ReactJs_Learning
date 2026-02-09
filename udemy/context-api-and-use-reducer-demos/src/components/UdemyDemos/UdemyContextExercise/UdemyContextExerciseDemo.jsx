import React from "react";
import ThemeContextProvider from "./ThemeContextProvider";
import Page from "./Page";
import "./UdemyContextExercise.css";

function UdemyContextExerciseDemo() {
  return (
    <ThemeContextProvider>
      <h2>Udemy Context Exercise Demo (Applying light or dark theme)</h2>
      <Page />
    </ThemeContextProvider>
  );
}

export default UdemyContextExerciseDemo;
