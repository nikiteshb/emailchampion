import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../services/userService";
import { Toast, ToastContainer } from "react-bootstrap";
import { login } from "../store/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import loginImg from '../assets/images/login_img.png';

const initialValues = {
  email: "",
  password: "",
};

 
const Login = () => {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  let navigate = useNavigate(); 
  const {values,errors,handleBlur,handleChange,handleSubmit,touched, isValid, dirty} = useFormik({
    initialValues: initialValues,
    validationSchema:loginSchema,
    onSubmit:(values,action) =>{
      getUsers()
      .then((res) => {
        const resdata = res.data;
        const isExist = resdata.filter(
          item => (
            (item.email === values.email) && (item.password === values.password)
          ));
        if (isExist) {
          
          navigate(`/dashboard/${isExist[0].id}`);
           let curruser = isExist[0]
            dispatch(login(curruser))

        }
      }).catch((error)=>{         
        setShow(true)
        action.resetForm() 
      });
    }
  });

  return (
    <>
      <ToastContainer className={"p-3"} position={"top-end"}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
            <Toast.Header>
              <small>Error</small>
            </Toast.Header>
            <Toast.Body>"Please Check user Email Id and Password"</Toast.Body>
          </Toast>
      </ToastContainer>

      <h1 className="text-primary text-center pb-3">Login</h1>
      <div className="text-center">
        <img src={loginImg} alt="" className="img-fluid "/>
      </div>
      <div className="custom-container mx-auto mb-5 p-5 border rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-3">
                <label className="mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
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
              <div className="form-group mb-3">
                <label className="mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
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
            <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary mt-4" disabled={!(isValid && dirty)}>
                    Submit
                  </button>
            </div>
          </div>
           
        </form>
        <div className="row pt-3">
          <div className="col-12 d-flex justify-content-center ">Need an account? <Link to="/signup" className='nav-link px-2 fw-bold text-primary'> Signup </Link></div>
        </div>
      </div>
    </>
  );
};

export default Login;
