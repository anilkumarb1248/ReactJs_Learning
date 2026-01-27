import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialogRef = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(1 - (remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    // <dialog className="result-modal" open>
    <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2> Your score: {score} </h2>}
      <p>
        The target time was <strong> {targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} left.</strong>
      </p>
      <form method="dailog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
}

// //In react older versions (may be before 19), the refs can't be passed as regular props.
// // For that we need to use the forwardRef
// import { forwardRef } from "react";
// const ResultModal = forwardRef(function ResultModal(
//   { result, targetTime },
//   ref,
// ) {
//   return (
//     // <dialog className="result-modal" open>
//     <dialog className="result-modal" ref={ref}>
//       <h2>You {result}!</h2>
//       <p>
//         The target time was <strong> {targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the timer with <strong>X seconds left.</strong>
//       </p>
//       <form method="dailog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });
export default ResultModal;
