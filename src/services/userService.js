import React from 'react'
import axios from 'axios'

const userBaseUrl = "http://localhost:3000/users";


async function getUsers(){
    return await axios.get(userBaseUrl)
}
async function addUser(user){    
    return await axios.post(userBaseUrl,user)
}

export {addUser,getUsers}