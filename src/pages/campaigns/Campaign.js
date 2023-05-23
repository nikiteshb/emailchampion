import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCampaign } from '../../services/campaignService'
import Certificate from '../templates/Certificate'
import { getContacts } from '../../services/contactService'
import { useSelector } from 'react-redux'

function Campaign() {
  const {id} = useParams()
 

  const [curCampaign,setCurCampaign] = useState(null)

  // useEffect(() =>{
  //     getCampaign(id).then(res => setCampaigns(res))
  // },[ ])
  // {campaigns.contactObj}

  useEffect(() => {
    
    const getCampaignss = async () => {
      if (id) {
        const campaign = await getCampaign(id);
        setCurCampaign(campaign);
      }
    };    
    getCampaignss();
  },[id])

  // console.log(curCampaign);
  
  return (
    
    <>
 
      {/* {curCampaign.map(contact => <Certificate key={contact.id} contact={contact} />)} */}
      {/* {campaigns.contactObj.map((campaign) => <Certificate key={campaign.id} contact={campaign}/>)} */}
      
    </>
  )
}


export default Campaign