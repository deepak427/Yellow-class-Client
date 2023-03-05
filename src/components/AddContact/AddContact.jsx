import React, { useState } from "react";
import "./AddContact.css";
import { addContact } from "../../actions/contact";
import { useDispatch, useSelector } from "react-redux";

const AddContact = ({id, handleShow}) => {
  const [nameContact, setNameContact] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameContact && !contact) {
      alert("Enter name and email");
      return;
    }

    dispatch(
      addContact(
        id,
        {
          name: nameContact, contact
        },
      )
    );
    setContact("");
    setNameContact("");
    handleShow();
  };

  return (
    <div className="add-contact-container">
      <h3>Add a contact</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-contact">
          <h4>Name</h4>
          <input
            type="name"
            id="name-contact"
            value={nameContact}
            onChange={(e) => {
              setNameContact(e.target.value);
            }}
          />
        </label>
        <label htmlFor="contact">
          <h4>Email</h4>
          <input
            type="email"
            id="contact"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="login-btn">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
