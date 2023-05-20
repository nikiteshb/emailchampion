import { input, Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addCampaign } from "../../services/campaignService";
import { useSelector } from "react-redux";
import { getContacts } from "../../services/contactService";
const initialValues = {
  name: "",
  subject: "",
  status: "",
  template: {
    name: "",
  },
  template_vars: {
    corporation_name: "",
    month: "",
    Year: "",
    bill_amount: "",
  },
  contacts: [],
  userId: "1",
};

const templateRadioOptions = [
  { value: "energy", label: "energy" },
  { value: "certificate", label: "certificate" },
  { value: "music", label: "music" },
];




const AddEditCampaign = (props) => {
  const [relatedContacts,setRelatedContacts] = useState([""])
  let loggedinuser = useSelector((state) => state.auth)

  useEffect(() =>{
    getContacts().then((res) => {
      let contacts = res.data.filter(u => u.userId == loggedinuser.userid);
      setRelatedContacts(contacts);
    }); 
  },[])  

 

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    isValid,
    dirty,state,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      let { data } = addCampaign({
        userId: "1",
        name: `${values.name}`,
        subject: `${values.subject}`,
        status: "pending",
        template: {
          name: `${values.template}`,
        },
        template_vars: {
          corporation_name: `${values.corporationName}`,
          month: `${values.month}`,
          Year: `${values.year}`,
          bill_amount: `${values.billAmount}`,
        },
        contacts: `${values.contacts}`,
        userId: "2",
      }).then((res) => console.log(res.data.template));
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} id="addEditCampaign">
        <h1>Add Campaign</h1>
        <div className="row">
          <div className="form-group col-lg-6 mb-3">
            <label className="mb-2 fw-bold">Campaign Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group col-lg-6 mb-3">
            <label className="mb-2 fw-bold">Subject</label>
            <input
              name="subject"
              type="text"
              className="form-control"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="form-group col-lg-6 mb-3"
          >
            <label className="mb-2 fw-bold">Select Template</label>

            {templateRadioOptions.map((radio) => (
              <div className="form-check" key={radio.value}>
                <label className="form-check-label">
                  {radio.label}
                  <input
                    type="radio"
                    name="template"
                    value={radio.value}
                    className="form-check-input"
                    checked={values.template === radio.value}
                    onChange={handleChange}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="col-lg-6 mb-3">
            {values.template == "energy" ? (
              <>
                <div className="row">
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Corporation Name</label>
                    <input
                      name="corporationName"
                      type="text"
                      className="form-control"
                      value={values.corporationName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Bill Amount</label>
                    <input
                      name="billAmount"
                      type="text"
                      className="form-control"
                      value={values.billAmount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Month</label>
                    <input
                      name="month"
                      type="text"
                      className="form-control"
                      value={values.month}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Year</label>
                    <input
                      name="year"
                      type="text"
                      className="form-control"
                      value={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </>
            ) : 
            values.template == "certificate" ? (
              <>
              <div className="row">
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Issuer</label>
                    <input
                      name="issuer"
                      type="text"
                      className="form-control"
                      value={values.issuer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Hours</label>
                    <input
                      name="hours"
                      type="text"
                      className="form-control"
                      value={values.hours}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Course Name</label>
                    <input
                      name="courseName"
                      type="text"
                      className="form-control"
                      value={values.courseName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </>
            ) 
            : values.template == "music" ? (
              <>
              <div className="row">
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Band Name</label>
                    <input
                      name="bandName"
                      type="text"
                      className="form-control"
                      value={values.bandName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Venue</label>
                    <input
                      name="venue"
                      type="text"
                      className="form-control"
                      value={values.venue}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Event Date</label>
                    <input
                      name="eventDate"
                      type="text"
                      className="form-control"
                      value={values.eventDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group col-lg-6 mb-3">
                    <label className="mb-2 fw-bold">Event Time</label>
                    <input
                      name="eventTime"
                      type="text"
                      className="form-control"
                      value={values.eventTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </>
            )
            : null}
          </div>
          <div className="col-lg-6 mb-3 " role="group" aria-labelledby="checkbox-group">
            <label className="mb-2 fw-bold">Contacts</label>
            <div className="mb-3 form-group">
             
            {relatedContacts.map(contact => (              
              <>
             
              <div className="form-check">
                <input
                  type="checkbox"
                  name="contacts"
                  value={contact.value}
                  className="form-check-input"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  {contact.firstName}
                </label>
              </div>
              </>
            ))} 
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEditCampaign;
