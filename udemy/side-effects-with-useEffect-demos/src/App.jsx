import { Outlet } from "react-router-dom";
import TopNavLinks from "./components/NavLinks/TopNavLinks";
import RoutesConfiguration from "./components/RoutesConfiguration";

function App() {
  return (
    <main>
      <header>Welcome to React useEffect, useMemo, useCallback Learning</header>
      <TopNavLinks />
      <RoutesConfiguration />
    </main>
  );
}

export default App;
