import React from "react";
import BasicContextDemosLinks from "../../NavLinks/BasicContextDemosLinks";
import { Outlet } from "react-router-dom";

function ContextDemos() {
  return (
    <div>
      {/* <h2>Basice Context Demos</h2> */}
      <BasicContextDemosLinks />
      <Outlet />
    </div>
  );
}

export default ContextDemos;
