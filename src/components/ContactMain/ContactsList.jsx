import Contact from "./Contact";

const ContactsList = ({showAddBtnDelete,deleteContacts, setDeleteContacts ,id, ContactList }) => {
  return (
    <div className="contacts-list">
      {ContactList.map((contact) => (
        <Contact deleteContacts={deleteContacts} setDeleteContacts={setDeleteContacts} showAddBtnDelete={showAddBtnDelete} id={id} contactId={contact._id} Contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactsList;
