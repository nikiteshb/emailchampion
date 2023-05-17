import React from "react";
import { Formik, useFormik } from "formik";
import { signupSchema } from "../schemas";
import axios from "axios";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import {addUser,getUsers} from "../services/userService";
import signupImg from '../assets/images/signup_img.png';

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  repassword: "",
};

const Signup = () => {
  let navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched, isValid, dirty } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        const receivedData = getUsers()
          .then((res) => {
            const resdata = res.data;
            const isExist = resdata.filter(
              (item) => item.email === values.email
            );
            if (isExist.length === 0) {
              const { data } = addUser({
                name: `${values.name}`,
                phone: `${values.phone}`,
                email: `${values.email}`,
                password: `${values.password}`,
                repassword: `${values.repassword}`,
              });
              action.resetForm();              
              navigate("/");
            }
          });
      },
    });

  return (
    <>
      <h1 className="text-primary text-center pb-3">Signup</h1>
      <div className="text-center">
        <img src={signupImg} alt="" className="img-fluid "/>
      </div>
      <div className="custom-container mx-auto mb-5 p-5 border rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group mb-3">
                <label className="mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  className="form-control"
                  aria-describedby="name"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error py-2 text-danger">{errors.name}</p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mb-3">
                  <label className="mb-2" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="phone"
                    id="phone"
                    className="form-control"
                    aria-describedby="phone"
                    placeholder="Enter Phone Number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="form-error py-2 text-danger">{errors.phone}</p>
                  ) : null}
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col">                            
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  className="form-control"
                  aria-describedby="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error py-2 text-danger">{errors.email}</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">              
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  className="form-control"
                  aria-describedby="password"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error py-2 text-danger">{errors.password}</p>
                ) : null}
              </div>
              
            </div>
            <div className="col-lg-6">
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="repassword">
                  Repeat Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="repassword"
                  id="repassword"
                  className="form-control"
                  aria-describedby="repassword"
                  placeholder="Enter repassword"
                  value={values.repassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.repassword && touched.repassword ? (
                  <p className="form-error py-2 text-danger">{errors.repassword}</p>
                ) : null}
              </div>
             
            </div>
            <div className="row">
              <div className="col text-center"> 
                  <button type="submit" className="btn btn-primary mt-4" disabled={!(isValid && dirty)}>
                    Submit
                  </button>
                
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-12 d-flex justify-content-center ">Already have account? <Link to="/" className='nav-link px-2 fw-bold text-primary'> Login </Link></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
