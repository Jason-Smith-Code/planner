import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /* Define state variables for contacts and appointments */
  // we have a contacts page and an appointments page, since both pages need to change their state we need to use useState for each of them

  const [contacts, setContacts] = useState([]);          // Our Contacts list will have nothing in it when the app starts, so we leave this as an empty array.
  const [appointments, setAppointments] = useState([]);  // Same applies to our appointments

  // List out the routes
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /* Implement functions to add data to contacts and appointments */
  // To do this we need to make an arrow function stored in a const variable
  // This arrow function will take in a number of parameters related to state
  // For the contacts state, we are expecting a name, phone and email, so these need to be parameters in the arrow function
  // Next we need to use setContacts, since we declared it as an empty array, the contents should be wrapped like this: setContacts([])
  // inside we need to delare the previousState using ...spread syntax, and declare the new state which happens to be an object {}

  const addContact = (firstName, lastName, phone, email) => {              // we add props here for the information we expect send
    setContacts([
      ...contacts,    // previous state
      {               // assigning the new state (object)
        firstName: firstName, 
        lastName: lastName,
        phone: phone,
        email: email,
      },
    ]);
  };

  const addAppointment = (title, contact, date, time) => {   // we add props here for the information we expect send
    setAppointments([
      ...appointments,    // previous state
      {                   // assigning the new state (object)
        title: title,     
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };


  // this is where we connect to the 2 different pages, contacts and appointments
  // The important part here, is to pass our information down in the form of props
  // data we need to pass: Contacts (the existing list of contacts), appointments (the existing list of appointments)
  // we also need to pass the 2 functions above, addContact and addAppointment
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
             <ContactsPage 
              contacts={contacts} 
              addContact={addContact} 
             />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
