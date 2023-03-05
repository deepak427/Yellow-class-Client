import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { deleteContact, editContact } from "../../actions/contact";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Contact = ({ id, contactId, Contact }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(Contact.name);
  const [email, setEmail] = useState(Contact.contact);

  const handleEdit =() => {
    dispatch(editContact(id, {
      name, contact: email,
      contactId
    }))
    setEdit(!edit)
  }

  const handleDelete = () => {
    dispatch(
      deleteContact(id, {
        contactId,
      })
    );
  };

  return (
    <div className="conatct-single">
      <h3>{Contact.name.charAt().toUpperCase()}</h3>
      <div>
        {edit ? (
          <>
            {" "}
            <h5>
              <input
                type="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </h5>
            <p>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </p>
          </>
        ) : (
          <>
            {" "}
            <h5>{Contact.name}</h5>
            <p>{Contact.contact}</p>
          </>
        )}
      </div>
      {edit ? (
        <FontAwesomeIcon
          onClick={handleEdit}
          style={{
            padding: "0.5rem 0 0.5rem 2rem",
            cursor: "pointer",
            height: "1.2rem",
          }}
          icon={faCheck}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => {
            setEdit(!edit);
          }}
          style={{ padding: "0.5rem 0 0.5rem 2rem", cursor: "pointer" }}
          icon={faEdit}
        />
      )}
      <FontAwesomeIcon
        onClick={handleDelete}
        style={{
          padding: "0.5rem 0 0.5rem 2rem",
          height: "1.2rem",
          cursor: "pointer",
        }}
        icon={faClose}
      />
    </div>
  );
};

export default Contact;
