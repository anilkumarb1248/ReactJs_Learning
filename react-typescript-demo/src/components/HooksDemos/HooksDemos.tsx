import UseContextDemos from "./UseContextDemos/UseContextDemos";
import UseReducerDemos from "./UseReducerDemos/UseReducerDemos";
import UseRefDemos from "./UseRefDemos/UseRefDemos";
import UseStatePropsDemos from "./UseStateProps/UseStatePropsDemos";

function HooksDemos() {
  return (
    <div>
      <h2>Hooks Demos</h2>
      {/* <UseStatePropsDemos /> */}
      {/* <UseReducerDemos/> */}
      {/* <UseContextDemos /> */}
      <UseRefDemos />
    </div>
  );
}

export default HooksDemos;
