import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);

  useEffect(() => {
    fetch("http://localhost:5000/allAppointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <div className="container-fluid row ">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-primary">All Patients</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllPatients;
