import React from "react";

export const ContactForm = ({ 
  firstName,                       // We use this to determine the value of the input field for name
  setfirstName, 
  lastName,
  setlastName,                   // We use this when applying onChange to change the value of name
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    // Use <form onSubmit={callback} > to create the html form, where callback is the function passed via props for handling the form submission
    <form onSubmit={handleSubmit}>
      {/* The children of the form should be <input> elements, each with one of the following type attributes: 'text', 'tel', 'email' and 'submit' */}
      {/* The value attribute of the 3 controlled <input> elements should be set to the associated variable passed via props */}
      {/* The onChange attributes of the 3 controlled <input> elements should be set to a callback function that passes e.target.value to the associated setter function from props */}
      {/* One example of a phone regex is the US locale: "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" */}
      <label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
          placeholder="Contact First Name"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
          placeholder="Contact Last Name"
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="[0-9]{11}"
          placeholder="Contact Phone Requires 11 Digits"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
