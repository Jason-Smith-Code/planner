// Add { useState } to the 'react' import statement
import React, { useState } from "react";
// Import AppointmentForm and TileList
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

// Extract the array of appointments and the callback for adding appointments from the props value passed as an argument to AppointmentsPage
export const AppointmentsPage = ({appointments, addAppointment,contacts }) => {   // In App.js, we passed 3 props to the appointments page, appointments, addAppointment and contacts. These need to be extracted here
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // The handleSubmit() function should call the callback function for adding a new appointment with the data from the form. It should also reset the appointment info state variables to their default values
    addAppointment(title, contact, date, time);
    // The four state variables holding the form’s appointment data should each default to an empty string using useState('')
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};
