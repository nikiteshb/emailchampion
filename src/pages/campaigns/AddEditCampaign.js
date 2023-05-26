import { input, Form, Formik, useFormik, Field } from "formik";
import React, { useEffect, useState } from "react";
import { addCampaign } from "../../services/campaignService";
import { useSelector } from "react-redux";
import { getContacts } from "../../services/contactService";
import { CampaignSchema } from "../../schemas";
const initialValues = {
  name: "",
  subject: "",
  status: "",
  template: {
    name: "",
  },
  template_vars: {},
  contacts: [],
  userId: "",
};

const templateRadioOptions = [
  { value: "energy", label: "Energy Bill" },
  { value: "certificate", label: "Certificate" },
  { value: "music", label: "Musical Night Invitation" },
];

const AddEditCampaign = (props) => {
  const [relatedContacts,setRelatedContacts] = useState([""])
  const loggedinuser = useSelector((state) => state.auth)

  useEffect(() =>{
    getContacts().then((res) => {
      let contacts = res.data.filter(u => u.userId == loggedinuser.userid);
      setRelatedContacts(contacts);
    }); 
  },[])  

  return (
    <Formik initialValues={initialValues} onSubmit={(values, action) => {
      let templatevars
      if(values.template == "energy"){
        templatevars = {
          corporation_name: values?.corporationName || "",
          month: values?.month || "",
          year: values?.year || "",
          bill_amount: values?.billAmount || ""
          }
      }else if(values.template == "certificate"){
        templatevars = {
          issuer: values?.issuer || "",
          hours: values?.hours || "",
          courseName: values?.courseName || "",
          }
      }else if(values.template == "music"){
        templatevars = {
          bandName: values?.bandName || "",
          venue: values?.venue || "",
          eventDate: values?.eventDate || "",
          eventTime: values?.eventTime || "",
          }
      }else{
        templatevars = null
      }
      let { data } = addCampaign({
        userid: `${loggedinuser.userid}`,
        name: values?.name || "",
        subject: values?.subject || "",
        status: "pending",
        template: {
          name: values?.template || "",
        },
        template_vars: templatevars || "",
        contacts: values?.selectedContacts || "energy",
      })
      action.resetForm();
      props.onHide()
    } }>
      {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit
       }) =>(
        <form id="addEditCampaign" onSubmit={handleSubmit} >
        <div className="row">
          <div className="form-group col-lg-6 mb-3">
            <label className="mb-2 fw-bold">Campaign Name</label>
            <Field
              name="name"
              type="text"
              className="form-control"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p className="form-error text-danger">{errors.name}</p>
              ) : null}
          </div>
          <div className="form-group col-lg-6 mb-3">
            <label className="mb-2 fw-bold">Subject</label>
            <Field
              name="subject"
              type="text"
              className="form-control"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.subject && touched.subject ? (<p className="form-error text-danger">{errors.subject}</p>
              ) : null}
          </div>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="form-group col-lg-6 mb-3"
          >
            <label className="mb-2 fw-bold">Select Template</label>

            {templateRadioOptions.map((radio) => (
              <div className="form-check" key={radio.value}>
                <Field
                    type="radio"
                    name="template"
                    value={radio.value}
                    className="form-check-input"
                    checked={values.template === radio.value}
                    onChange={handleChange}
                  />
                <label className="form-check-label">
                  {radio.label}                  
                </label>
              </div>
            ))}
            
            {errors.template && touched.template ? (<p className="form-error text-danger">{errors.template}</p>
              ) : !touched.template ? (<p className="form-error text-danger">"Please Select Template"</p>) :null}
          </div>
          <div className="col-lg-6 mb-3">
            {values.template == "energy" ? (
              <>
                <div className="row">
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Corporation Name</label>
                    <Field
                      name="corporationName"
                      type="text"
                      className="form-control"
                      value={values.corporationName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />                    
                    {errors.corporationName && touched.corporationName ? (<p className="form-error text-danger">{errors.corporationName}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Bill Amount</label>
                    <Field
                      name="billAmount"
                      type="number"
                      className="form-control"
                      value={values.billAmount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.billAmount && touched.billAmount ? (<p className="form-error text-danger">{errors.billAmount}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Month</label>
                    <Field
                      name="month"
                      type="text"
                      className="form-control"
                      value={values.month}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.month && touched.month ? (<p className="form-error text-danger">{errors.month}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Year</label>
                    <Field
                      name="year"
                      type="number"
                      className="form-control"
                      value={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.year && touched.year ? (<p className="form-error text-danger">{errors.year}</p>
                    ) : null}
                  </div>
                </div>
              </>
            ) : 
            values.template == "certificate" ? (
              <>
              <div className="row">
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Issuer</label>
                    <Field
                      name="issuer"
                      type="text"
                      className="form-control"
                      value={values.issuer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.issuer && touched.issuer ? (<p className="form-error text-danger">{errors.issuer}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Hours</label>
                    <Field
                      name="hours"
                      type="number"
                      className="form-control"
                      value={values.hours}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.hours && touched.hours ? (<p className="form-error text-danger">{errors.hours}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Course Name</label>
                    <Field
                      name="courseName"
                      type="text"
                      className="form-control"
                      value={values.courseName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.courseName && touched.courseName ? (<p className="form-error text-danger">{errors.courseName}</p>
                    ) : null}
                  </div>
                </div>
              </>
            ) 
            : values.template == "music" ? (
              <>
              <div className="row">
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Band Name</label>
                    <Field
                      name="bandName"
                      type="text"
                      className="form-control"
                      value={values.bandName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.bandName && touched.bandName ? (<p className="form-error text-danger">{errors.bandName}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Venue</label>
                    <Field
                      name="venue"
                      type="text"
                      className="form-control"
                      value={values.venue}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.venue && touched.venue ? (<p className="form-error text-danger">{errors.venue}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Event Date</label>
                    <Field
                      name="eventDate"
                      type="date"
                      className="form-control"
                      value={values.eventDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.eventDate && touched.eventDate ? (<p className="form-error text-danger">{errors.eventDate}</p>
                    ) : null}
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Event Time</label>
                    <Field
                      name="eventTime"
                      type="time"
                      className="form-control"
                      value={values.eventTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.eventTime && touched.eventTime ? (<p className="form-error text-danger">{errors.eventTime}</p>
                    ) : null}
                  </div>
                </div>
              </>
            )
            : null}
          </div>
          <div className="col-lg-6 mb-3 " >
            <label className="mb-2 fw-bold">Contacts</label>
            <div className="mb-3 form-group" role="group" aria-labelledby="checkbox-group">
             
            {relatedContacts.map((contact) => (              
              <div className="form-check" key={contact.id}>                
                <label className="form-check-label">
                <Field
                    className="form-check-input"
                    type="checkbox"
                    name="selectedContacts"
                    value={contact.id}
                    checked={values.contacts.includes(contact.id) ? true : null}
                  />
                  {contact.firstName}
                </label>
              </div>
            ))}  
            </div>
          </div>
        </div>
        <div className="text-end">
        <hr />
        <button type="submit" className="btn btn-primary me-3">
          Submit
        </button>
        <button className='btn btn-primary' onClick={props.onHide}>Cancel</button>
        </div>
      </form>
      )}
    </Formik>
  );
};

export default AddEditCampaign;
