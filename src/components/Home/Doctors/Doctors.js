import React, { useEffect, useState } from "react";
import doctorSm from "../../../images/doctorSm.png";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  console.log(doctorsData);

  useEffect(() => {
    fetch("https://stark-temple-71384.herokuapp.com/doctors")
      .then(res => res.json())
      .then(data => setDoctorsData(data));
  }, []);
  return (
    <section>
      <h6 className="text-center mb-3" style={{ color: "#1cc7c1" }}>
        Our Doctors
      </h6>
      <div className=" row justify-content-center">
        <div className="row w-75 d-flex">
          {doctorsData.map(doctor => (
            <Doctor doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
