import React from "react";
import { NavLink } from "react-router-dom";

function BasicUseReducerDemosLinks() {
  return (
    <div>
      <nav>
        <NavLink to="basicCounterDemo">Basic Counter Demo </NavLink>
        <NavLink to="complexCounterStateDemo">
          Complex Counter State Demo
        </NavLink>
        <NavLink to="multipleReducersDemo">Multiple Reducers Demo</NavLink>
        <NavLink to="fetchingDataByUseReducerDemo">
          Fetching Data by UseReducer
        </NavLink>
      </nav>
    </div>
  );
}

export default BasicUseReducerDemosLinks;
