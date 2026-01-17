import "./App.css";
import BasicsDemos from "./Components/Basics/BasicsDemos";
import ConditionalRenderingDemos from "./Components/ConditionalRendering/ConditionalRenderingDemos";
import PropsDemos from "./Components/PropsDemos/PropsDemos";

function App() {
  return (
    <div className="App">
      {/* <BasicsDemos /> */}
      {/* <PropsDemos /> */}
      <ConditionalRenderingDemos />
    </div>
  );
}

export default App;
