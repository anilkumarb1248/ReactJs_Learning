import React from "react";
import InputFocusClassComp from "./ClassComponentDemos/InputFocusClassComp";
import FocusInputParent from "./ClassComponentDemos/FocusInputParent";
import ShowTimer from "./ClassComponentDemos/ShowTimer";
import ForwardRefParentFocus from "./ClassComponentDemos/ForwardRefParentFocus";
import FileUpload from "./FunctionalComponentDemos/FileUpload";
import ForwardRefDemo from "./FunctionalComponentDemos/ForwardRefDemo";
import UseImperativeHandleHookDemos from "./useImperativeHandleDemos/UseImperativeHandleHookDemos";

function RefsDemos() {
  return (
    <div>
      <h2>Refs & Forward Refs Demos</h2>
      {/* <InputFocusClassComp /> */}
      {/* <FocusInputParent /> */}
      {/* <ShowTimer /> */}
      {/* <ForwardRefParentFocus /> */}
      {/* <FileUpload /> */}
      {/* <ForwardRefDemo /> */}
      <UseImperativeHandleHookDemos />
    </div>
  );
}

export default RefsDemos;
