import React from 'react'
import axios from 'axios'

const contactBaseUrl = "http://localhost:3000/contacts";

const contactService = function contactService(){
    return{
        getContacts: function getContacts(){
            return axios.get(contactBaseUrl)
        },
        deleteContact: function deleteContact(id){
            return axios.delete(`${contactBaseUrl}/${id}`)
        }
    }
}

export default new contactService