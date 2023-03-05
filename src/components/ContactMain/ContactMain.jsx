import ContactsList from "./ContactsList";
import "./ContactMain.css";
import { useSelector } from "react-redux";
import AddContact from "../AddContact/AddContact";
import { useState } from "react";

const ContactMain = () => {
  const ContactList = useSelector((state) => state.currentUserReducer);
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [btnText, setBtnText] = useState("Add Contact");

  const handleShow = () => {
    !showAddBtn ? setBtnText("Cancel") : setBtnText("Add Contact");
    setShowAddBtn(!showAddBtn);
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
            </div>
            {showAddBtn && <AddContact handleShow={handleShow} id={ContactList?.result[0]._id} />}
            <ContactsList id={ContactList?.result[0]._id} ContactList={ContactList.result[0].contacts} />
          </>
        )}
      </div>
    </div>
  );
};

export default ContactMain;
