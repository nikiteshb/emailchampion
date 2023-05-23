import React from 'react'
import energylogo from "../../assets/images/energybill_logo.png"
function EnergyBill(props) {
  return (
    <>
      <div className="enerybill rounded shadow-sm bg-white mx-auto my-3 px-3">
          <div className="row p-3">
            <div className="col-6">
              <img src={energylogo} alt="" className="img-fluid" />
            </div>
            <div className="col-6 d-flex align-items-center">
              <h2 className='fw-bold'>Invoice ID - 114412</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p className='text-center'>Thank you for partnering with use, please find the details of the bill below.</p>
              <div className="p-4 bg-white rounded shadow m-3">
                <p><strong>01/{props.campaign?.template_vars.month || "May"}/{props.campaign?.template_vars.year || "2023"} - 30/{props.campaign?.template_vars.month || "May"}/{props.campaign?.template_vars.year || "2023"} </strong></p>
                <div className="pt-5">
                  <strong>
                    Hi {props.contact?.firstName || "Nikitesh"} {props.contact?.lastName || "Bhadadde"},
                  </strong>
                  <p className='py-3'>Thank you for opting for a fixed-amount plan. Your energy bill for the {props.campaign?.template_vars.month || "May"} Month of  {props.campaign?.template_vars.year || "2023"} is Rs {props.campaign?.template_vars.bill_amount || "3000"} /- only. Kindly pay in time to avoid penalty charges or disconnection.</p>
                  <strong>Regards,</strong><br />
                  <strong className='text-uppercase'>{props.campaign?.template_vars.corporation_name || "Global Power Corporation"}</strong>
                </div>
              </div>
            </div>
            <div className="col-12 py-4 text-center">
              <button className="btn btn-primary ">Pay Bill</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default EnergyBill