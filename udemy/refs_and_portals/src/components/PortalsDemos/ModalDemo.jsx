import { useState } from "react";
import "./Modal.css"; // Import the CSS file
import MyModal from "./MyModal";

function ModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={openModal}>Open Modal</button>

      <MyModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Hello, Modal!</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close</button>
      </MyModal>
    </div>
  );
}

export default ModalDemo;
