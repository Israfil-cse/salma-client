import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";
import quote from "../../../images/quote.png";
// import { config } from "@fortawesome/fontawesome-svg-core";

const testimonialData = [
  {
    quote:
      "Nulla irure reprehenderit magna enim do enim consectetur. Officia sint nostrud nostrud aliqua ad ad voluptate irure et cillum in. Nulla duis cupidatat sint magna ex. Sunt aliqua laborum aliquip exercitation. ",
    img: wilson,
    name: "Wilson Harry",
    from: "California"
  },
  {
    quote:
      "In common language usage, normally means the fleshy seed-associated structures of a plant that are sweet or sour, and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.",
    img: ema,
    name: "Ema Gomez",
    from: "Canada"
  },
  {
    quote:
      "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines,  ",
    img: aliza,
    name: "Aliza Farari",
    from: "London"
  }
];

const Testimonials = () => {
  return (
    <section>
      <div className="testimonial-heading-container d-flex justify-content-between">
        <div className="ml-5">
          <h6 style={{ color: "#1cc7c1" }}>TESTIMONIALS</h6>
          <h3 className="text-dark">
            What's Our Patients <br /> Says.
          </h3>
        </div>
        <img className="mr-5" src={quote} alt="" style={{ height: "125px" }} />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="row w-75 ">
          {testimonialData.map(testimonial => (
            <Testimonial testimonial={testimonial}></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
