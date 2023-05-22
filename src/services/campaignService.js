import axios from 'axios'

const contactBaseUrl = "http://localhost:3000/campaigns";

async function getCampaign(id){
    return await axios.get(`${contactBaseUrl}/${id}`)
}
async function getCampaigns(){
    return await axios.get(contactBaseUrl)
}
async function addCampaign(Campaign){
    return await axios.post(contactBaseUrl,Campaign)
}
async function updateCampaign(id,Campaign){
    return await axios.put(`${contactBaseUrl}/${id}`,Campaign)
}
async function deleteCampaign(id){
    return await axios.delete(`${contactBaseUrl}/${id}`)
}

export {getCampaign,getCampaigns,addCampaign,updateCampaign,deleteCampaign} 