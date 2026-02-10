import { NavLink } from "react-router-dom";

function BasicDemosLinks() {
  return (
    <nav style={{ fontSize: "20px" }}>
      <NavLink to="documentTitleUpdateWithCounter">Document Title</NavLink>
      <NavLink to="runEffectConditionally">Run Conditionally </NavLink>
      <NavLink to="runEffectOnlyOnce">Run Only Once </NavLink>
      <NavLink to="effectWithCleanup">Cleanup </NavLink>
      <NavLink to="effectWithIncorrectDeps">Incorrect Deps</NavLink>
      <NavLink to="multipleEffects">Multiple Effects </NavLink>
      <NavLink to="fetchingData">Data Fetching </NavLink>
      <NavLink to="staleBehaviour">Stale Behaviour </NavLink>
    </nav>
  );
}

export default BasicDemosLinks;
