import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setIsOpen(false);
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};
export default Modal;
