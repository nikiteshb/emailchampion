import React from "react";
import { MdMode, MdOutlineDelete } from "react-icons/md";
function ContactList() {
  return (
    <>
      <div className="row">
          <div className="col-12 pb-4 text-end">
            <button type="submit" className="btn btn-primary mt-4" >
              New Contact
            </button>
          </div>
      </div>
      <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Gender</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Nikitesh</th>
            <td>Bhadade</td>
            <td>nikitesh@nikitesh.com</td>
            <td>Male</td>
            <td>10 may 2023</td>
            <td>
              <MdMode /> <MdOutlineDelete />
            </td>
          </tr>
          <tr>
            <th scope="row">Nikitesh</th>
            <td>Bhadade</td>
            <td>nikitesh@nikitesh.com</td>
            <td>Male</td>
            <td>10 may 2023</td>
            <td>
              <MdMode /> <MdOutlineDelete />
            </td>
          </tr>
          <tr>
            <th scope="row">Nikitesh</th>
            <td>Bhadade</td>
            <td>nikitesh@nikitesh.com</td>
            <td>Male</td>
            <td>10 may 2023</td>
            <td>
              <MdMode /> <MdOutlineDelete />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}

export default ContactList;
