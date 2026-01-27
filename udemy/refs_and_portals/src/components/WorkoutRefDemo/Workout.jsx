import React from "react";

export default function Workout({ title, description, time, onComplete }) {
  const timerRef = React.useRef();
  function handleStartWorkout() {
    timerRef.current = setTimeout(() => {
      handleStopWorkout();
    }, time * 1000);
  }

  function handleStopWorkout() {
    clearTimeout(timerRef.current);
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
