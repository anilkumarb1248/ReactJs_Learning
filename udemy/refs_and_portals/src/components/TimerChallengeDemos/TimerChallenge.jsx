import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef();
  const dialogRef = useRef();

  // const [timeStarted, setTimeStarted] = useState(false);
  // const [timeExpired, setTimeExpired] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    if (timerRef?.current) {
      clearInterval(timerRef.current);
    }

    if (dialogRef.current) {
      dialogRef.current.open();
    }
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    // setTimeExpired(false);
    // timerRef.current = setTimeout(() => {
    //   setTimeExpired(true);
    //   if (dialogRef.current) {
    //     dialogRef.current.open();
    //   }
    // }, targetTime * 1000);
    // setTimeStarted(true);

    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);
  };

  const handleStop = () => {
    // clearTimeout(timerRef.current);
    if (dialogRef.current) {
      dialogRef.current.open();
    }
    clearInterval(timerRef.current);
    // setTimeStarted(false);
    // setTimeExpired(false);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>

      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      {/* {timeExpired && <p> You lost!</p>} */}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button
          className="challenge-button"
          onClick={timerIsActive ? handleStop : handleStart}
        >
          {timerIsActive ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running..." : "Timer is inactive"}
      </p>
    </section>
  );
}

export default TimerChallenge;
