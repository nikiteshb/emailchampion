import { useFormik } from "formik";
import React, { useState } from "react";
import { addContact, getContacts, updateContact } from "../../services/contactService";
import { ContactSchema } from "../../schemas";
import { useSelector } from "react-redux";
  
let initialValues

function AddEditContact(props) {
  let loggedinuser = useSelector((state) => state.auth)
  if(props.edit == "true"){
    initialValues= {
      id:`${props.contact.id}`,
      userId:`${props.contact.userId}`,
      firstName:`${props.contact.firstName}`,
      lastName:`${props.contact.lastName}`,
      email:`${props.contact.email}`,
      gender:`${props.contact.gender}`,
      city:`${props.contact.city}`,
      createdAt:`${props.contact.createdAt}`
    }
  }else{
    initialValues = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "Please Select",
      city: "",
      createdAt: "",
    };  
  }
  let currDate = new Date(); 
  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    isValid,
    dirty
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {       
      getContacts()
          .then(res => {
            const resdata = res.data;
            let isExist = resdata.filter(item => item.email == values.email && loggedinuser.userid == item.userId);
            if(props.edit){ 
              let {data} = updateContact(props.contact.id,{
                userId: loggedinuser.userid,
                firstName: `${values.firstName}`,
                lastName: `${values.lastName}`,
                email: `${values.email}`,
                gender: `${values.gender}`,
                city: `${values.city}`,
                createdAt: `${currDate.getDate() + "/" + (currDate.getMonth() + 1) + "/" + currDate.getFullYear()}`
              })        
              action.resetForm();
              props.confirmModal()        
            }else{
              if (isExist.length === 0) { 
                let { data } = addContact({
                  userId: loggedinuser.userid,
                  firstName: `${values.firstName}`,
                  lastName: `${values.lastName}`,
                  email: `${values.email}`,
                  gender: `${values.gender}`,
                  city: `${values.city}`,
                  createdAt: `${currDate.getDate() + "/" + (currDate.getMonth() + 1) + "/" + currDate.getFullYear()}`
                });
                action.resetForm();
                props.confirmModal() 
              }
               
            }
                      
          })
        }
  });

  return (
    <>
      <form onSubmit={handleSubmit} id="addEditForm">
        <h1>{props.edit ? "Edit User" : "Add User"}</h1>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                aria-describedby="firstName"
                placeholder="Enter First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.firstName && touched.firstName ? (
                <p className="form-error text-danger">{errors.firstName}</p>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                aria-describedby="lastName"
                placeholder="Enter Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <p className="form-error text-danger">{errors.lastName}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={props.edit == "true"}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                aria-describedby="city"
                placeholder="Enter city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && touched.city ? (
                <p className="form-error text-danger">{errors.city}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                aria-describedby="gender"
                defaultValue={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="select">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && touched.gender ? (
                <p className="form-error text-danger">{errors.gender}</p>
              ) : null}
            </div>
          </div>
        </div>
        {/* <div className="col-12 text-center"><button className="btn btn-primary" type='submit' >Submit</button></div> */}
      </form>
    </>
  )
}

export default AddEditContact
