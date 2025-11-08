
import React from 'react';
import ReactDOM from 'react-dom';

// Get the DOM node where the portal will render
const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose }) => {
    // Use createPortal to render children into modalRoot
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        modalRoot // The second argument is the DOM container
    );
};

export default Modal;