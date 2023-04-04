import ContactsList from "./ContactsList";
import "./ContactMain.css";
import { useSelector } from "react-redux";
import AddContact from "../AddContact/AddContact";
import { useState } from "react";
import { deleteContact } from "../../actions/contact";
import { useDispatch } from "react-redux";

const ContactMain = () => {
  const ContactList = useSelector((state) => state.currentUserReducer);
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [showAddBtnDelete, setShowAddBtnDelete] = useState(false);
  const [btnText, setBtnText] = useState("Add Contact");
  const [btnTextDelete, setBtnTextDelete] = useState("Delete");
  const [deleteContacts, setDeleteContacts] = useState([])

  const dispatch = useDispatch();

  const handleShow = () => {
    !showAddBtn ? setBtnText("Cancel") : setBtnText("Add Contact");
    setShowAddBtn(!showAddBtn);
  };

  const handledeleteMulti = () => {
    console.log(deleteContacts)
    dispatch(
      deleteContact(ContactList?.result[0]._id, {
        contactIds: deleteContacts,
      })
    );
  }

  const handleShowDelete = () => {
    !showAddBtnDelete ? setBtnTextDelete("Done") : handledeleteMulti();
    setShowAddBtnDelete(!showAddBtnDelete);
  };

  return (
    <div className="main-bar">
      <h1>Your Contacts</h1>
      <div>
        {!ContactList?.result[0].contacts ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {" "}
            <div className="main-bar-header">
              <p className="results">{ContactList?.result[0].contacts.length} contacts</p>
              <button
                type="button"
                className="add-contact-btn"
                onClick={handleShow}
              >
                {btnText}
              </button>
              <button
                type="button"
                className="add-contact-btn"
                onClick={handleShowDelete}
              >
                {btnTextDelete}
              </button>
            </div>
            {showAddBtn && <AddContact handleShow={handleShow} id={ContactList?.result[0]._id} />}
            <ContactsList deleteContacts={deleteContacts} setDeleteContacts={setDeleteContacts} showAddBtnDelete={showAddBtnDelete} id={ContactList?.result[0]._id} ContactList={ContactList.result[0].contacts} />
          </>
        )}
      </div>
    </div>
  );
};

export default ContactMain;
