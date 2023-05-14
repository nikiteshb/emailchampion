import React from 'react'
import { Modal } from 'react-bootstrap'
 
function CustomModal(props) {
    
  return (
     <>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="custom-modal">
                {props.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer> 
            <button className='btn btn-primary' form='addEditForm' type='submit' onClick={props.confirmModal}>Submit</button>
            <button className='btn btn-primary' onClick={props.onHide}>Cancel</button>
        </Modal.Footer>
        </Modal>
     </>
  )
}

export default CustomModal