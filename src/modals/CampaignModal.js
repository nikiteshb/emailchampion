import { Modal } from 'react-bootstrap'
import React from 'react'

function CampaignModal(props) {
  return (
    <>
    <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        {/* <Modal.Footer>
            <button className='btn btn-primary' onClick={props.onHide}>Cancel</button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default CampaignModal