import React from 'react'
import { Link } from 'react-router-dom'

function TemplateList() {
  return (
    <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Certificate</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-outline-primary btn-sm mt-3" to={"/certificate"}>View all Certificates</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Music Event</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-outline-primary btn-sm mt-3" to={"/musicevent"}>View all Music Events</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Energy Bill</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-outline-primary btn-sm mt-3" to={"/energybill"}>View all Energy Bills</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default TemplateList