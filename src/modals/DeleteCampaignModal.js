import React from 'react'
import { Modal } from 'react-bootstrap'
import { deleteCampaign } from '../services/campaignService'

function DeleteCampaignModal(props) {
  return (
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
            <h3>Please confirm to delete {props.name}</h3>
        </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-primary' onClick={() => {
                deleteCampaign(props.currCampaign.id);
                props.onHide();
            } }>Submit</button>            
            <button className='btn btn-primary' onClick={props.onHide}>Cancel</button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeleteCampaignModal