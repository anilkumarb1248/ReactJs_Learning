import React from "react";
import TimerChallenge from "./TimerChallenge";

function TimerChallengeDemos() {
  return (
    <>
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default TimerChallengeDemos;
