import React from "react";
import BasicDemosLinks from "../NavLinks/BasicDemosLinks";
import { Outlet } from "react-router-dom";

function BasicDemos() {
  return (
    <div>
      <h2>Basic Demos</h2>
      <BasicDemosLinks />
      <Outlet />
    </div>
  );
}

export default BasicDemos;
