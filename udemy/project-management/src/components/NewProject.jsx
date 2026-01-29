import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onSaveProject, onCancel }) {
  const modalRef = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleOnSaveBtnClick = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    console.log("************ ", dueDate);
    //Validation
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modalRef.current.open();
    } else {
      onSaveProject({
        title: title,
        description: description,
        dueDate: dueDate,
      });
    }
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops.. looks like you forgot to enter a value
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valid value for every input
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="px-6 py-2 rounded-md text-stone-800 bg-stone-200 hover:bg-stone-400 hover:text-stone-50"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-600"
              onClick={handleOnSaveBtnClick}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}

export default NewProject;
