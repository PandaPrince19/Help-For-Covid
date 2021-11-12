import React from "react";

//Styles
import "./Modal.css";

const Modal = ({ setIsModal, children }) => {
  return (
    <div className="modal">
      <i className="fas fa-times" onClick={() => setIsModal(false)}></i>
      {children}
    </div>
  );
};

export default Modal;
