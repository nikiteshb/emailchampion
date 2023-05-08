import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import axios from "axios";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  repassword: "",
};

const Signup = () => {

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        const receivedData = axios
          .get("http://localhost:3000/users")
          .then((res) => {
            const resdata = res.data;
            const isExist = resdata.filter(
              (item) => item.email === values.email
            );
            if (isExist.length === 0) {
              const { data } = axios.post("http://localhost:3000/users", {
                name: `${values.name}`,
                phone: `${values.phone}`,
                email: `${values.email}`,
                password: `${values.password}`,
                repassword: `${values.repassword}`,
              });
              action.resetForm();
            }
          });
      },
    });

  return (
    <>
      <h1 className="text-primary text-center">Signup</h1>
      <div className="custom-container mx-auto my-5 p-5 border rounded shadow">
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
                  <p className="form-error">{errors.name}</p>
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
                    <p className="form-error">{errors.phone}</p>
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
                  <p className="form-error">{errors.email}</p>
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
                  <p className="form-error">{errors.password}</p>
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
                  <p className="form-error">{errors.repassword}</p>
                ) : null}
              </div>
             
            </div>
            <div className="row">
              <div className="col text-center">
              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
