import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getCampaign } from '../../services/campaignService'
import Certificate from '../templates/Certificate'
import EnergyBill from '../templates/EnergyBill'
import MusicEvent from '../templates/MusicEvent'

function Campaign() {
  const {id} = useParams()
  const location= useLocation();
  const campaignId = location.state?.campaignId;
  const [isLoading,setLoading] = useState(true)
  const [curCampaign,setCurCampaign] = useState(null)
 
  useEffect(() => {
    const getCampaignss = async () => {
      if (id) {
        const campaign = await getCampaign(id);
        setCurCampaign(campaign);
        setLoading(false)
      }
    };    
    getCampaignss();
    
  },[campaignId])

  if(isLoading){
    return <div className="">Loading, Please Wait</div>
  }

  return (
    <>
      {curCampaign && curCampaign.contactObj ? (
        <>
        {curCampaign.contactObj.map(contact => {
          if(curCampaign.template.name === "energy"){
            return <EnergyBill key={contact.id} campaign={curCampaign} contact={contact} />
          }else if(curCampaign.template.name === "certificate"){
            return <Certificate key={contact.id} campaign={curCampaign} contact={contact} />
          }else if(curCampaign.template.name === "music"){
            return <MusicEvent key={contact.id} campaign={curCampaign} contact={contact} />
          }
        }
        )}
        </>
      ) : null}
    </>
  )
}


export default Campaign