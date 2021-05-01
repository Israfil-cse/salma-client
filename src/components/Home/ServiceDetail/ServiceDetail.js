import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center mt-5">
      <img
        className="mb-3"
        style={{ height: "50px" }}
        src={service.img}
        alt=""
      />
      <h5 className="mb-3">{service.name}</h5>
      <p className="text-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </div>
  );
};

export default ServiceDetail;
