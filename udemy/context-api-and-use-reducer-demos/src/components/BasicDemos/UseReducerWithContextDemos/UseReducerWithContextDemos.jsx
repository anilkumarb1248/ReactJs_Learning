import CounterContextProvider, { CounterContext } from "./CounterContext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

function UseReducerWithContextDemos() {
  return (
    <div>
      <h2>UseReducer with Context Demos</h2>
      <CounterContextProvider>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContextProvider>
    </div>
  );
}

export default UseReducerWithContextDemos;
