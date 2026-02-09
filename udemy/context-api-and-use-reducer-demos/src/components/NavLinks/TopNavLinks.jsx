import React from "react";
import { NavLink } from "react-router-dom";

function TopNavLinks() {
  return (
    <nav>
      {/* <NavLink to="/">Home Page </NavLink> */}
      <NavLink to="/basicDemos">Basic Demos </NavLink>
      <NavLink to="/udemyDemos">Udemy Demos </NavLink>
      <NavLink to="/udemyContextExercise">
        Udemy Context Exercise (Theme)
      </NavLink>
    </nav>
  );
}

export default TopNavLinks;
