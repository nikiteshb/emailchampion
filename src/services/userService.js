import React from 'react'
import axios from 'axios'

const userBaseUrl = "http://localhost:3000/users";


function getUsers(){
    return axios.get(userBaseUrl)
}
function addUser(user){    
    return axios.post(userBaseUrl,user)
}

export {addUser,getUsers}