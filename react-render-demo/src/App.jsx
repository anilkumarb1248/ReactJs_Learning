import "./App.css";
import Parent from "./components/ParentChild/Parent";
import ParentTwoCounter from "./components/ParentChild/ParentTwoCounter";
import ArrayUseState from "./components/StateImmutability/ArrayUseState";
import ObjectUseState from "./components/StateImmutability/ObjectUseState";
import UseReducerDemo from "./components/UseReducerDemos/UseReducerDemo";
import UseStateDemo from "./components/UseStateDemos/UseStateDemo";

function App() {
  return (
    <div>
      {/* <UseStateDemo /> */}
      {/* <UseReducerDemo /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      <Parent />
      {/* <ParentTwoCounter /> */}
    </div>
  );
}

export default App;
