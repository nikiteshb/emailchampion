import React, { useEffect, useState } from 'react'
import { getCampaigns } from '../../services/campaignService'
function Certificate() {
        const [relatedCampaigns,setRelatedCampaigns] = useState([])
        useEffect(()=>{
                getCampaigns().then(res => {
                        console.log(res.data);
                })
        },[])
  return (
    <>
        {relatedCampaigns.map((campaign) =>{
                <div className="certificate my-3 p-5 text-center">
                        <h6 className='fw-bold'>{campaign.name}</h6>
                        <h1 className='pb-5'>{campaign.subject}</h1>
                        <p>This is to Certify that</p>
                        <h3 className='name pb-5'>Nikitesh Bhadade</h3>
                        <p>has successfully completed the 50 hours certification course in Progressive Web Apps.</p>
                </div>
        })}
        <div className="certificate my-3 p-5 text-center">
                <h6 className='fw-bold'>UI Studio, Globant</h6>
                <h1 className='pb-5'>Certificate of Completion</h1>
                <p>This is to Certify that</p>
                <h3 className='name pb-5'>Nikitesh Bhadade</h3>
                <p>has successfully completed the 50 hours certification course in Progressive Web Apps.</p>
        </div>
        <div className="certificate my-3 p-5 text-center">
                <h6 className='fw-bold'>UI Studio, Globant</h6>
                <h1 className='pb-5'>Certificate of Completion</h1>
                <p>This is to Certify that</p>
                <h3 className='name pb-5'>Nikitesh Bhadade</h3>
                <p>has successfully completed the 50 hours certification course in Progressive Web Apps.</p>
        </div>
        <div className="certificate my-3 p-5 text-center">
                <h6 className='fw-bold'>UI Studio, Globant</h6>
                <h1 className='pb-5'>Certificate of Completion</h1>
                <p>This is to Certify that</p>
                <h3 className='name pb-5'>Nikitesh Bhadade</h3>
                <p>has successfully completed the 50 hours certification course in Progressive Web Apps.</p>
        </div>
    </>
  )
}

export default Certificate