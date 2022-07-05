import "./Modal.css";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";



function Modal({id, message}) {
    /* Close */
    const [modalClosed, setModalClosed] = useState(false);
    const closeModal = () => {
        setModalClosed(true);
    }
    
    
    return (
        <>
            {
                modalClosed === false &&
                <div className="modal" id={id}>
                    <div className="modal-content">
                        <i className="modal-close-icon ri-close-line" onClick={closeModal}></i>
                        <span>{message}</span>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;