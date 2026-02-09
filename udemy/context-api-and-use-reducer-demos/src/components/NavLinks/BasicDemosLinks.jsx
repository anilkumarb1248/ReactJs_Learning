import React from "react";
import { NavLink } from "react-router-dom";

function BasicDemosLinks() {
  return (
    <div>
      <nav>
        <NavLink to="contextDemos">Context API Demos </NavLink>
        <NavLink to="useReducerDemos"> UseReducer Demos </NavLink>
        <NavLink to="useReducerWithContextDemos">
          UseReducer with Context Demos
        </NavLink>
      </nav>
    </div>
  );
}

export default BasicDemosLinks;
