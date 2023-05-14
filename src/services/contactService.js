// import React from 'react'
import axios from 'axios'

const contactBaseUrl = "http://localhost:3000/contacts";

async function getContacts(){
    return await axios.get(contactBaseUrl)
}
async function addContact(contact){
    return await axios.post(contactBaseUrl,contact)
}
async function updateContact(id,contact){
    return await axios.put(`${contactBaseUrl}/${id}`,contact)
}
async function deleteContact(id){
    return await axios.delete(`${contactBaseUrl}/${id}`)
}

export {getContacts,addContact,updateContact,deleteContact} 