import React from 'react'
import { MdDirectionsRun, MdMode, MdOutlineDelete} from 'react-icons/md'

function CampaignsList() {
  return (
    <>
            <div className="row">
          <div className="col-12 pb-4 text-end">
            <button type="submit" className="btn btn-primary mt-4" >
              New Campaign
            </button>
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
          <tr>
            <th scope="row">Studio Certificates Jun 2023</th>
            <td>Basic of something</td>
            <td>30</td>
            <td>Nikitesh Bhadade</td>
            <td><span className="badge bg-success p-2">Sent</span></td>
            <td>Certficate</td>
            <td>
              <MdDirectionsRun /> <MdMode /> <MdOutlineDelete />
            </td>
          </tr> 
          <tr>
            <th scope="row">Studio Certificates Jun 2023</th>
            <td>Basic of something</td>
            <td>30</td>
            <td>Nikitesh Bhadade</td>
             <td><span className="badge bg-success p-2">Sent</span></td>
            <td>Certficate</td>
            <td>
              <MdDirectionsRun /> <MdMode /> <MdOutlineDelete />
            </td>
          </tr>
          <tr>
            <th scope="row">Studio Certificates Jun 2023</th>
            <td>Basic of something</td>
            <td>30</td>
            <td>Nikitesh Bhadade</td>
             <td><span className="badge bg-success p-2">Sent</span></td>
            <td>Certficate</td>
            <td>
              <MdDirectionsRun /> <MdMode /> <MdOutlineDelete />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </>
  )
}

export default CampaignsList