import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Contacts</h5>
                    <h2 className="display-4">45</h2>
                    {/* <a href="#" className="card-link">View</a> */}
                    <Link to={"/contact"}> View</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Campaigns</h5>
                    <h2 className="display-4">45</h2>
                    <a href="#" className="card-link">View</a>
                </div>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Templates</h5>
                    <h2 className="display-4">45</h2>
                    <a href="#" className="card-link">View</a>
                </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard