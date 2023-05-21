import React, { useEffect, useState } from "react";
import { MdDirectionsRun, MdMode, MdOutlineDelete } from "react-icons/md";
import { getCampaigns } from "../../services/campaignService";
import CampaignModal from "../../modals/CampaignModal";
import AddEditCampaign from "./AddEditCampaign";
import { getContacts } from "../../services/contactService";
import { useSelector } from "react-redux";

function CampaignsList() {
  const [modalShow, setModalShow] = useState(false);

  const [relatedCampaigns,setRelatedCampaigns]  = useState([])
  let userData =  useSelector((state) => state.user.data)
  console.log(userData);
  useEffect(() =>{
    
    getContacts().then((res) => console.log(res.data))
    getCampaigns().then((res) => setRelatedCampaigns(res.data))
    
  },[ ]) 
  return (
    <>
      <div className="row">
        <div className="col-12 pb-4 text-end"> 
        {userData.length == 0 ? <p className="text-danger fw-bold">Please add Atleast 1 Contact to create Campaign</p> 
        : <button type="submit" className="btn btn-primary mt-4" onClick={()=> setModalShow(true)} >
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
                  {campaign.contacts.length}
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
                  <MdDirectionsRun /> <MdMode /> <MdOutlineDelete />
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
      <CampaignModal show={modalShow} onHide={() => setModalShow(false)} title = "Add Campaign">
        <AddEditCampaign onHide={() => setModalShow(false)}/>
      </CampaignModal>

    </>
  );
}

export default CampaignsList;
