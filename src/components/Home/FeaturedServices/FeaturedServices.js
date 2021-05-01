import React from "react";
import featured from "../../../images/featured.jpg";

const FeaturedServices = () => {
  return (
    <section className="mt-5 w-75 ">
      <div className="d-flex">
        <div className="col-md-5" style={{ paddingLeft: "155px" }}>
          <img style={{ width: "300px" }} src={featured} alt="" />
        </div>
        <div className="col-md-7 ml-5">
          <h1 className="mt-4 mb-4">
            Exceptional Dental <br /> Care, On Your Term
          </h1>
          <div style={{ width: "600px" }} className="text-secondary mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </div>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
