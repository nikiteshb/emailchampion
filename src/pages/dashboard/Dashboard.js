import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getContacts } from '../../services/contactService';
import { getCampaigns } from '../../services/campaignService';
import { useSelector } from 'react-redux';

function Dashboard() {
    const loggedinuser = useSelector((state) => state.auth)
    
    let params = useParams();

    let [RelativeContacts,setRelativeContacts] = useState("")
    let [RelativeCampaigns,setRelativeCampaigns] = useState("")
    useEffect(() =>{
        getContacts().then((res) => {
            let contacts = res.data.filter((g) => g.userId == loggedinuser.userid);
            setRelativeContacts(contacts);
          });
      
          getCampaigns().then((res) => {
            setRelativeCampaigns(res.data);
          });
    },[])

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 my-3">
                <div className="card bg-white"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Contacts</h5>
                    <h2 className="display-4">{RelativeContacts.length}</h2>
                    <Link className="btn btn-primary btn-sm mt-3" to={"/contacts"}>View all contacts</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3 my-3">
                <div className="card bg-white"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Campaigns</h5>
                    <h2 className="display-4">{RelativeCampaigns.length}</h2>
                    <Link className="btn btn-primary btn-sm mt-3" to={"/campaigns"}>View all Campaigns</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3 my-3">
                <div className="card bg-white"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Templates</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-primary btn-sm mt-3" to={"/templates"}>View all templates</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard