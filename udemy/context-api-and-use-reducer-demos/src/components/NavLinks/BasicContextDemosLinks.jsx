import React from "react";
import { NavLink } from "react-router-dom";

function BasicContextDemosLinks() {
  return (
    <div>
      <nav>
        <NavLink to="classComponentDemos">Class Component Demos </NavLink>
        <NavLink to="functionalComponentDemos">
          Functional Component Demos
        </NavLink>
      </nav>
    </div>
  );
}

export default BasicContextDemosLinks;
