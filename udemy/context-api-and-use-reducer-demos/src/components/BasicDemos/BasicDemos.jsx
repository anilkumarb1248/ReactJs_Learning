import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BasicDemosLinks from "../NavLinks/BasicDemosLinks";

function BasicDemos() {
  return (
    <div>
      {/* <h2>Basic Demos</h2> */}
      <BasicDemosLinks />
      <Outlet />
    </div>
  );
}

export default BasicDemos;
