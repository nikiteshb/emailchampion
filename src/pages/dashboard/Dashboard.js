import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getContacts } from '../../services/contactService';
import { getCampaign, getCampaigns } from '../../services/campaignService';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../../store/Slices/UserSlice';

function Dashboard() {
    const loggedinuser = useSelector((state) => state.auth)
    let params = useParams();

    let [RelativeContacts,setRelativeContacts] = useState("")
    let [RelativeCampaigns,setRelativeCampaigns] = useState("")
    let dispatch = useDispatch()
    const [isLoading,setLoading] = useState(true)
    useEffect(() =>{
        getContacts().then((res) => {
            let contacts = res.data.filter((g) => g.userId == loggedinuser.userid);
            setRelativeContacts(contacts);
            dispatch(user(RelativeContacts))
          });
      
          const getCampaignsall =async () =>{
            if(loggedinuser.userid){
              const campaigns = await getCampaigns(loggedinuser.userid)
              setRelativeCampaigns(campaigns)
              setLoading(false)
            }
          }
          getCampaignsall()
          
    },[RelativeContacts,RelativeCampaigns])
    if(isLoading){
        return <div className="">Loading, Please Wait</div>
      }
   
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
                    <h2 className="display-4">3</h2>
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