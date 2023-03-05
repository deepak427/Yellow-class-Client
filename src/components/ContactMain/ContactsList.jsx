import Contact from "./Contact";

const ContactsList = ({ id, ContactList }) => {
  return (
    <div className="contacts-list">
      {ContactList.map((contact) => (
        <Contact id={id} contactId={contact._id} Contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactsList;
