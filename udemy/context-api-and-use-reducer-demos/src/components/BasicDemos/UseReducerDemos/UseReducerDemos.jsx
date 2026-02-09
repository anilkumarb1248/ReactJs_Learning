import React from "react";
import BasicUseReducerDemosLinks from "../../NavLinks/BasicUseReducerDemosLinks";
import { Outlet } from "react-router-dom";

function UseReducerDemos() {
  return (
    <div>
      <BasicUseReducerDemosLinks />
      <Outlet />
    </div>
  );
}

export default UseReducerDemos;
