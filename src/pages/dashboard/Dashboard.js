import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 my-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Contacts</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-outline-primary btn-sm mt-3" to={"/contacts"}>View all contacts</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3 my-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Campaigns</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-outline-primary btn-sm mt-3" to={"/campaigns"}>View all Campaigns</Link>
                </div>
                </div>
                </div>
                <div className="col-lg-3 my-3">
                <div className="card bg-secondary"  >
                <div className="card-body">
                    <h5 className="card-title fw-bold">Templates</h5>
                    <h2 className="display-4">45</h2>
                    <Link className="btn btn-outline-primary btn-sm mt-3" to={"/templates"}>View all templates</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard