import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faEdit,
  faCheck,
  faCircle,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import { deleteContact, editContact } from "../../actions/contact";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Contact = ({deleteContacts, setDeleteContacts, showAddBtnDelete, id, contactId, Contact }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(Contact.name);
  const [email, setEmail] = useState(Contact.contact);
  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    dispatch(
      editContact(id, {
        name,
        contact: email,
        contactId,
      })
    );
    setEdit(!edit);
  };

  const handleDelete = () => {
    dispatch(
      deleteContact(id, {
        contactIds: [contactId],
      })
    );
  };

  const handlechecked = () => {
    setChecked(!checked);
    setDeleteContacts([...deleteContacts, contactId ])
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
      {showAddBtnDelete ? (
        <>
          {checked ? (
            <FontAwesomeIcon
              onClick={handlechecked}
              style={{
                padding: "0.5rem 0 0.5rem 2rem",
                height: "1.2rem",
                cursor: "pointer",
              }}
              icon={faCircle}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handlechecked}
              style={{
                padding: "0.5rem 0 0.5rem 2rem",
                height: "1.2rem",
                cursor: "pointer",
              }}
              icon={faCircleDot}
            />
          )}
        </>
      ) : (
        <FontAwesomeIcon
          onClick={handleDelete}
          style={{
            padding: "0.5rem 0 0.5rem 2rem",
            height: "1.2rem",
            cursor: "pointer",
          }}
          icon={faClose}
        />
      )}
    </div>
  );
};

export default Contact;
