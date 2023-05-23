import React from 'react'
function Certificate(props) {
  return (
    <>
        <div className="certificate my-3 p-5 text-center">
                <h6 className='fw-bold'>{props.campaign?.template_vars.issuer || "Institute of Institute"}</h6>
                <h1 className='pb-5'>Certificate of Completion</h1>
                <p>This is to Certify that</p>
                <h3 className='name pb-5'>{props.contact?.firstName || "Nikitesh"} {props.contact?.lastName || "Bhadade"}</h3>
                <p>has successfully completed the {props.campaign?.template_vars.hours || "100"} hours certification course in {props.campaign?.template_vars.courseName || "Certified React Developer"}.</p>
        </div>
    </>
  )
}

export default Certificate