import Player from "./components/Player.jsx";
// import TimerChallenge from "./components/TimerChallengeDemos/TimerChallenge.jsx";
import TimerChallengeDemos from "./components/TimerChallengeDemos/TimerChallengeDemos.jsx";
// import WorkoutRefDemo from "./components/WorkoutRefDemo/WorkoutRefDemo.jsx";
// import PortalsDemos from "./components/PortalsDemos/PortalsDemos.jsx";
import RefsDemos from "./components/RefsDemos/RefsDemos.jsx";

function App() {
  return (
    <>
      <Player />
      {/* <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div> */}
      <TimerChallengeDemos />
      <hr />
      {/* <WorkoutRefDemo /> */}
      <RefsDemos />
      {/* <PortalsDemos /> */}
    </>
  );
}

export default App;
