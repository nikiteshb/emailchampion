import React from 'react'

function DeleteModal(props) {
  return (
    <h3>Please confirm to delete contact "{`${props.firstName} ${props.lastName}`}"</h3>
  )
}

export default DeleteModal