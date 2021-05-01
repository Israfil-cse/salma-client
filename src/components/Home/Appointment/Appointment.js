import React from "react";

import doctor from "../../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section className="appointment py-10">
      <div className="container ">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img className="doctor" src={doctor} alt="" />
          </div>
          <div className="col-md-7 py-5">
            <h5 style={{ color: "#1cc7c1" }}>APPOINTMENT</h5>
            <h2 className="text-white">
              Make An Appointment <br /> Today
            </h2>
            <p style={{ width: "700px" }} className="text-white">
              Sunt labore consectetur veniam minim nostrud amet labore. Tempor
              nostrud ad dolor ad nulla amet dolore ex cillum. Dolore velit sunt
              excepteur deserunt anim ipsum laboris. Voluptate deserunt dolor
              nulla sint excepteur.
            </p>
            <button
              style={{ backgroundColor: "#1cc7c1" }}
              className="text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
