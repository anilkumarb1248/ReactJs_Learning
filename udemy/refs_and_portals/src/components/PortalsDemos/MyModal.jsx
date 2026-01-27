import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const MyModal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Use the native showModal() method to display the dialog
      dialogRef.current.showModal();
      // Add a class to the body to prevent background scrolling
      document.body.classList.add("modal-open");
    } else {
      // Use the native close() method to hide the dialog
      dialogRef.current.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  // Handle closing when clicking the backdrop
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  const modalNode = document.getElementById("modal");

  return createPortal(
    <dialog ref={dialogRef} onCancel={onClose} onClick={handleBackdropClick}>
      {children}
    </dialog>,
    // document.body, // Render the modal directly into the document body
    modalNode, // Render the modal on the specified root node
  );
};

export default MyModal;
