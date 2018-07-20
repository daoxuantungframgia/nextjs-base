import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalComponent = ({ title, show, handleClose, children }) => (
  <Modal show={show} onHide={handleClose}>
    { title &&
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
    }
    <Modal.Body>
      {children}
    </Modal.Body>
  </Modal>
)

export default ModalComponent