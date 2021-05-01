import React from "react";
import fluoride from "../../../images/fluoride.jpg";
import cavity from "../../../images/cavity.jpg";
import whitening from "../../../images/whitening.jpg";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatement",
    img: fluoride
  },
  {
    name: "Cavity Feeling",
    img: cavity
  },
  {
    name: "Teeth Whitening",
    img: whitening
  }
];

const Services = () => {
  return (
    <section>
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }} className="mt-5">
          Our Services
        </h5>
        <h2 style={{ color: "#3a4256" }} className="mt-3 mb-5">
          Services We Provide
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {serviceData.map(service => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
