import React from "react";
import image404 from "../../assets/images/404.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 mx-auto text-center">
          <img src={image404} alt="not found" className="img-fluid" />
          <Link to="/dashboard" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
