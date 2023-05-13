// import React from 'react'
import axios from 'axios'

const contactBaseUrl = "http://localhost:3000/contacts";

function getContacts(){
    return axios.get(contactBaseUrl)
}
function addContact(contact){
    return axios.post(contactBaseUrl,contact)
}
function updateContact(id,contact){
    return axios.put(`${contactBaseUrl}/${id}`,contact)
}
function deleteContact(id){
    return axios.delete(`${contactBaseUrl}/${id}`)
}

export {getContacts,addContact,updateContact,deleteContact} 