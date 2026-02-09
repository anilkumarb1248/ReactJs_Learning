import { Outlet } from "react-router-dom";
import TopNavLinks from "./components/NavLinks/TopNavLinks";
import RoutesConfiguration from "./components/RoutesConfiguration";

function App() {
  return (
    <main>
      <header>
        Welcome to React Context API and useReducer State Management Learning
      </header>
      <TopNavLinks />
      <RoutesConfiguration />
    </main>
  );
}

export default App;
