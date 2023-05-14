import React, { useEffect, useState } from "react";
import { MdMode, MdOutlineDelete } from "react-icons/md";

import AddEditContact from "./AddEditContact";
import { deleteContact, getContacts } from "../../services/contactService"; 
import CustomModal from "../../modals/CustomModal";
import DeleteModal from "../../modals/DeleteModal";

  
function ContactList() {
  const [AllContacts, setAllContacts] = useState([""]);
  const [ModalShow,setModalShow]= useState(false)
  const [CurrContact,setCurrContact] = useState("")
  let [ModalFor,setModalFor]= useState("")
 

  useEffect(() =>{
    getContacts().then((res) => {
      setAllContacts(res.data);
    });
  },[operationContact])
  
  
  function operationContact(contact,type){
    setModalFor(type)
    setCurrContact(contact)
    setModalShow(true)
    console.log("operation " + CurrContact.id,CurrContact);
  }

  function submitDelete(type) {
    setModalFor(type)
    deleteContact(CurrContact.id)
    setModalShow(false)
  }

  function submitContact(type) {
    setModalShow(true)
    setModalFor(type)
    setModalShow(false)
  }
  return (    
    <>
      <div className="row">
        <div className="col-12 pb-4 text-end">
          <button type="submit" className="btn btn-primary mt-4" onClick={() => operationContact("","add")}>
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
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.gender}</td>
                    <td>{contact.createdAt}</td>
                    <td> 
                    <button type="button" className="btn btn-link" onClick={() => operationContact(contact,"edit")}>
                      <MdMode />
                    </button>
                    <button type="button" className="btn btn-link" onClick={() => operationContact(contact,"delete")}>
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

      {/* <AddEditContact /> */}
              
       <CustomModal show={ModalShow}
        onHide={() => setModalShow(false)}
        confirmModal={ModalFor === "add" ? submitContact : ModalFor === "delete" ? submitDelete : null}
        dialogClassName={ModalFor}
        contact={CurrContact} >
        {ModalFor === "delete" ? 
        <DeleteModal firstName={CurrContact.firstName} lastName={CurrContact.lastName}/> 
        : ModalFor === "add" ? <AddEditContact />  
        : null }
       </CustomModal>       
 
    </>
  );
}

export default ContactList;
