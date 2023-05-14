import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../services/userService";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  let navigate = useNavigate();
  let [userId,setUserId] = useState("")
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
          navigate(`/user/${isExist[0].id}`);
        }
      });

    }
  });

  return (
    <>
      <h1 className="text-primary text-center">Login</h1>
      <div className="custom-container mx-auto my-5 p-5 border rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-3">
                <label className="mb-2" htmlFor="email">
                  Email
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
            <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-4" disabled={!(isValid && dirty)}>
                    Submit
                  </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
