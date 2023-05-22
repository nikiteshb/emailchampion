import axios from 'axios'
const BASE_URL = "http://localhost:3000"
const campaignBaseUrl = "http://localhost:3000/campaigns";

const getCampaign = async (id) => {
    const res = await axios.get(`${campaignBaseUrl}/${id}`)
    const campaign = await res.data;
    const contacts = campaign.contacts;

    const promiseArr = await contacts.map((ele) => {
        return axios.get(`${BASE_URL}/contacts/${ele}`).then((res) => res.data);
      });
 
      const contactObj = await Promise.all([...promiseArr]).then((values) => {
        return values.map((arr) => arr);
      });
    return { ...campaign, contactObj};
}
async function getCampaigns(){
    return await axios.get(campaignBaseUrl)
}
async function addCampaign(Campaign){
    return await axios.post(campaignBaseUrl,Campaign)
}
async function updateCampaign(id,Campaign){
    return await axios.put(`${campaignBaseUrl}/${id}`,Campaign)
}
async function deleteCampaign(id){
    return await axios.delete(`${campaignBaseUrl}/${id}`)
}

export {getCampaign,getCampaigns,addCampaign,updateCampaign,deleteCampaign} 