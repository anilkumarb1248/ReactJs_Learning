import React from "react";
import { NavLink } from "react-router-dom";

function TopNavLinks() {
  return (
    <nav>
      {/* <NavLink to="/">Home Page </NavLink> */}
      <NavLink to="/basicDemos">Basic Demos </NavLink>
      <NavLink to="/udemyDemos">Udemy Demos </NavLink>
      <NavLink to="/useMemoDemos">useMemo Demos </NavLink>
      <NavLink to="/useCallbackDemos">useCallback Demos </NavLink>
    </nav>
  );
}

export default TopNavLinks;
