import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(success => {
          if (success) {
            alert("Contact added successfully");
            e.target.reset();
          }
        });
  }

  return (
    <section>
      <div className="contact">
        <div className="text-center">
          <h6 className="top-padding" style={{ color: "#1cc7c1" }}>
            Contact Us
          </h6>
          <h2 style={{ color: "white" }}>Always Connect With Us</h2>
        </div>
        <div>
          <form className="form-container d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-50">
              <input className="form-control w-100" name="email" placeholder="Email" ref={register({ required: true })} />
              {errors.email && <span>This field is required</span>} <br />

              <input className="form-control w-100" name="subject" placeholder="subject" ref={register({ required: true })} />
              {errors.subject && <span>This field is required</span>} <br />

              <textarea className="form-control w-100" name="message" placeholder="Your Message" ref={register({ required: true })} />
              {errors.message && <span>This field is required</span>} <br />

              <input className='btn btn-white float-right' style={{ backgroundColor: "#1cc7c1" }} type="submit" value="Submit" />
            </div>
          </form>

          {/* <form className="form-container d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-50">
            <input className="form-control w-100" {...register("email", { required: true })} placeholder="Email Address" />
            {errors.email && <span>This field is required</span>} <br/>

            <input className="form-control w-100" {...register("subject", { required: true })} placeholder="subject"/>
            {errors.subject && <span>This field is required</span>} <br/>

            <textarea className="form-control w-100" {...register("subject", { required: true })} placeholder="Your Message"/>
            {errors.subject && <span>This field is required</span>} <br/>

            <input className='btn-white float-right' style={{ backgroundColor: "#1cc7c1" }} type="submit" value="Submit" />
              </div>
          </form> */}





        </div>
      </div>
    </section>
  );
};

export default Contact;
