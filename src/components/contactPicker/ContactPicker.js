import React from "react";
// Extract the array of contacts and the callback for handling onChange events from the props value passed as an argument to ContactPicker
// The default <option> should have key and value attributes
// The default <option> should have selected="selected" attribute
// Use map() on the contact array in props to render an <option> for each contact with key and value attributes set to the contact name


// this file is connected to AppointmentForm.js, which contains the ContactPicker inside its form
// we gave that several props, the ones we need are name, contacts and onChange

// Contacts is passed down from App -> AppointmentsPage -> AppointmentsForm -> ContactPicker
export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <select name={name} onChange={onChange}>  
      {/* 
      Default option 
      We give it a value of an empty string
      We give it a key value starting point
      */}
      <option defaultValue={""} key={0}>
        No Contact Selected
      </option>
      {/* To search through contacts, we need to map our contacts and return an option with value and key props */}
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
