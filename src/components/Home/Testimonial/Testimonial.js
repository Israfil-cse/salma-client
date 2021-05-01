import React from "react";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial-body-container col-md-4">
      <div className="box-shadow p-3">
        <p className=" text-justify mb-5">{testimonial.quote}</p>

        <div className="d-flex pr-5">
          <div>
            <img src={testimonial.img} alt="" />
          </div>
          <div className="ml-3">
            <h5 style={{ color: "#1cc7c1" }}>{testimonial.name}</h5>
            <h6>{testimonial.from}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
