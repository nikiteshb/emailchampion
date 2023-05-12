import React, { useEffect, useState } from "react";
import { MdMode, MdOutlineDelete } from "react-icons/md";
import contactService from "../../services/contactService";
import { Link } from "react-router-dom";
function ContactList() {
  const [AllContacts, setAllContacts] = useState([""]);

  useEffect(() => {
    contactService.getContacts().then((res) => {
      setAllContacts(res.data);
    });
  },[contactService]);
  return (
    <>
      <div className="row">
        <div className="col-12 pb-4 text-end">
          <button type="submit" className="btn btn-primary mt-4">
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
             {
              AllContacts.map((contact,index) =>{
                return (
                  <tr key={index}>
                    <td>{contact.first_name}</td>
                    <td>{contact.last_name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.gender}</td>
                    <td>1/12/2012</td>
                    <td> 
                    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <MdMode />
                    </button>
                    <button type="button" className="btn btn-link" onClick={() =>(contactService.deleteContact(contact.id))}>
                    <MdOutlineDelete/>
                    </button>

                    </td>
                  </tr>
                )
              })
             }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ContactList;
