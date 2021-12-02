import React from "react";
// Import the ContactPicker component
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({ 
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [day, month, year] = new Date()
      .toLocaleDateString("en-GB")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // We need a function to fetch existing contacts, we can do this with map
  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  // Use <form onSubmit={callback} > to create the html form, where callback is the function passed via props for handling the form submission
  // The children of the form should be <input> elements of type text, date, time and submit
  // The value attribute of the input fields should be set to the associated variable in props
  // The onChange attribute for each of the <input> elements and the ContactPicker should be set to a callback function that passes e.target.value to the associated setter function
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Appointment Title"
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Appointment With"
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
