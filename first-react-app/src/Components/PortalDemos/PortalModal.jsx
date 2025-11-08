

import React, { useState } from 'react';
import Modal from './Modal';

function PortalModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ overflow: 'hidden', height: '100px', border: '1px solid black' }}>
            <h3>Portal Modal Demo</h3>
            <p>Content inside the App container with overflow: hidden.</p>
        </div>
        // <div style={{ overflow: 'hidden', height: '100px', border: '1px solid black' }}>
        //     <h1>My App</h1>
        //     <p>Content inside the App container with overflow: hidden.</p>

        //     <button onClick={() => setIsModalOpen(true)}>
        //         Open Modal
        //     </button>

        //     {/* The Modal is logically a child here, but physically rendered in #modal-root */}
        //     {isModalOpen && (
        //         <Modal onClose={() => setIsModalOpen(false)}>
        //             <h2>Portal Content</h2>
        //             <p>I am rendered outside the parent's DOM, so I'm not clipped!</p>
        //         </Modal>
        //     )}
        // </div>
    );
}

export default PortalModal;


