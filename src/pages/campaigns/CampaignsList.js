import React, { useEffect, useState } from "react";
import { MdDirectionsRun, MdMode, MdOutlineDelete } from "react-icons/md";
import { deleteCampaign, getCampaign, getCampaigns } from "../../services/campaignService";
import CampaignModal from "../../modals/CampaignModal";
import AddEditCampaign from "./AddEditCampaign";
import { useSelector } from "react-redux";
import DeleteCampaignModal from "../../modals/DeleteCampaignModal";
import { Link } from "react-router-dom";

function CampaignsList() {
  const [modalShow, setModalShow] = useState(false);
  const [delModalShow, setDelModalShow] = useState(false);
  const [modalFor,setModalFor] =useState("")
  const [relatedCampaigns,setRelatedCampaigns]  = useState([])
  const [currCampaign,setCurrCampaign] = useState({})
  const userData =  useSelector((state) => state.user.data)
  let loggedInuser = useSelector((state) => state.auth)
  const [isLoading,setLoading] = useState(true)

  const deleteCurrContact = (campaign) =>{
    setCurrCampaign(campaign)
    setDelModalShow(true)
  }
  const addCurrContact = (type) =>{
    setCurrCampaign(" ")
    setModalShow(true)
    setModalFor(type)
  }
  const editCurrContact = (campaign,type) =>{
    setCurrCampaign(campaign)
    setModalShow(true)
    setModalFor(type)
  }
  useEffect(() =>{
    const getCampaignsall =async () =>{
      if(loggedInuser.userid){
        const campaigns = await getCampaigns(loggedInuser.userid)
        setRelatedCampaigns(campaigns)
        setLoading(false)
      }
    }
    getCampaignsall()
  },[delModalShow])

  if(isLoading){
    return <div className="">Loading, Please Wait</div>
  }
  
  return (
    <>
      <div className="row">
        <div className="col-12 pb-4 text-end"> 
        {userData.length == 0 ? <p className="text-danger fw-bold">Please add Atleast 1 Contact to create Campaign</p> 
        : <button type="submit" className="btn btn-primary mt-4" onClick={()=> addCurrContact("Add")} >
            New Campaign
          </button> }

        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">Campaign Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Recipients</th>
              <th scope="col">Status</th>
              <th scope="col">Created By</th>
              <th scope="col">Template</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {relatedCampaigns.map(campaign => (
              
              <tr key={campaign.id}>
                <td>
                  {campaign.name}
                </td>
                <td>
                  {campaign.subject}
                </td>
                <td>
                  {campaign.contacts?.length }
                </td>
                <td>
                <span className="badge bg-warning p-2">{campaign.status}</span>
                </td>
                <td>
                  {campaign.id}
                </td>
                <td>
                  {campaign.template.name}
                </td>
                <td>
                <Link to={`/campaigns/${campaign.id}`} className="btn btn-link text-success" >
                  <MdDirectionsRun />
                </Link>
                  <Link type="button" className="btn btn-link text-primary" onClick={() => editCurrContact(campaign,"Edit")}>
                <MdMode /> 
                </Link>
                <Link type="button" className="btn btn-link text-danger" onClick={() => deleteCurrContact(campaign)}>
                  <MdOutlineDelete />
                </Link>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
      <CampaignModal show={modalShow} onHide={() => setModalShow(false)} title={modalFor} currCampaign={currCampaign}>
        <AddEditCampaign onHide={() => setModalShow(false)} title={modalFor} currCampaign={currCampaign} />
      </CampaignModal> 
      <DeleteCampaignModal show={delModalShow} onHide={() => setDelModalShow(false)} name="campaign" currCampaign={currCampaign}/> 

    </>
  );
}

export default CampaignsList;
