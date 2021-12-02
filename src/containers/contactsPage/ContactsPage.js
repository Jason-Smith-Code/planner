import React, { useState, useEffect } from "react";                       // We need to import useState and useEffect as we will be using them in this file

import { ContactForm } from "../../components/contactForm/ContactForm";   // We need to import the contact form as we will be returning it in "add contacts"
import { TileList } from "../../components/tileList/TileList";            // We need to import the tile list as we will be returning it in the "contacts" section

export const ContactsPage = ({ contacts, addContact }) => {               // In App.js, we passed 2 props to the contact page, contacts, and addContact. These need to be extracted here        
  // The three state variables holding the form’s contact data should each default to an empty string using useState('')
  const [firstName, setfirstName] = useState(""); 
  const [lastName, setlastName] = useState("");                                  
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // Use a fourth local state variable to track a duplicate Email. It should be false by default using useState(false)
  const [duplicate, setDuplicate] = useState(false);

  // Within handleSubmit(), if the duplicate state variable is false, call the callback function for adding a new contact (passed via props) using the data from the form. Then reset the contact info state variables to their default state
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(firstName, lastName, phone, email);
      setfirstName("");
      setlastName("");
      setPhone("");
      setEmail("");
    }
  };
  // To check for duplicates, implement a call to useEffect that sets the duplicate state variable to true if the name state variable is already in the contacts list


  useEffect(() => {
    // write a function which checks if an email already exists in contacts
    const emailIsDuplicate = () => {
      // use .find to locate a name matching "email"
      const match = contacts.find((contact) => contact.email === email);
      // write a condition to check if the search found a match ( if it is not equall to undefined)
      if (match !== undefined) {              
        return true;
      }
      return false;
    };

    if (emailIsDuplicate()) {
      setDuplicate(true);
      //console.log("Email enter already exists")
    } else {
      setDuplicate(false);
    }
  }, [email, contacts]); // condition effect will only take place when email changes, but we also need contacts as it is a dependancy for name

  return (
    <>
      <section>
        <h2>
          Add Contact
        </h2>
        <p>{duplicate ? "Email Already Exists" : ""}</p>
        <ContactForm
          firstName={firstName}
          setfirstName={setfirstName}
          lastName={lastName}
          setlastName={setlastName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};
