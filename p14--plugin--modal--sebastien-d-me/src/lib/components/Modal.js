import "./Modal.css";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";


function Modal({id, parameter, message}) {
    // Close
    const [modalClosed, setModalClosed] = useState(false);
    const closeModal = () => {
        setModalClosed(true);
    }

    
    // Template
    return (
        <div>
            {
                modalClosed === false &&
                <div className="modal" id={id} style={parameter}>
                    <div className="modal-content">
                        <i className="modal-close-icon ri-close-line" onClick={closeModal}></i>
                        <span>{message}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default Modal;