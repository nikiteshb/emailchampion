import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCampaign } from '../../services/campaignService'
import Certificate from '../templates/Certificate'
import { getContacts } from '../../services/contactService'
import { useSelector } from 'react-redux'

function Campaign() {
  const {id} = useParams()

  const loggedinuser = useSelector((state) => state.auth)

  const [relatedContacts,setRelatedContacts] = useState([""])
  const [relatedCampaignContacts,setRelatedCampaignContacts] = useState([""])
  const [finalContacts,setFinalContacts] = useState([""])
  const [currCampaign,setCurrCampaign] = useState([""])
  useEffect(() =>{
     getCampaign(id).then((curcamp) => (setCurrCampaign(curcamp.data)))
     getCampaign(id).then(res => setRelatedCampaignContacts(res.data.contacts))
     getContacts().then(con => setRelatedContacts(con.data.filter((user) => user.userId == loggedinuser.userid )))
     setFinalContacts(relatedContacts.filter((contact) => relatedCampaignContacts.includes(`${contact.id}`)))
    
     //  getContacts().then(con => console.log(con.data))
    // console.log("related ccc", relatedCampaignContacts)
    // console.log("related", relatedContacts)

    // console.log("final" ,relatedContacts.filter((contact) => relatedCampaignContacts.includes(`${contact.id}`)));
    // users.filter(user => userIDsToFilter.includes(user.id.toString()));
    // console.log("currCampaign", currCampaign)

  },[id])
  
  return (
    <>
      {finalContacts.map(certificate => (
        
        <Certificate key={certificate.id} issuer="institure" hours="1000" course="course" contactName={`${certificate.firstName} ${certificate.lastName}`}/>
      ))}
      
    </>
  )
}

export default Campaign