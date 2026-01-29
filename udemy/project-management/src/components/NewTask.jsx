import React, { useRef, useState } from "react";
import Modal from "./Modal";

function NewTask({ onAddTask }) {
  const taskModalRef = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  const handleTaskChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleAddTask = () => {
    if (enteredTask.trim() === "") {
      taskModalRef.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  };
  return (
    <>
      <Modal ref={taskModalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops.. looks like you forgot to enter a value
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valid task
        </p>
      </Modal>

      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-80 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
          onChange={handleTaskChange}
        />
        <button
          onClick={handleAddTask}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-600"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default NewTask;
