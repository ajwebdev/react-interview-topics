import React, { useState, useRef } from 'react';
import Modal from './Modal';

const PortalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="container">
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h1>Modal</h1>
          <p>Modal content</p>
        </Modal>
      )}
    </div>
  );
};
export default PortalExample;
