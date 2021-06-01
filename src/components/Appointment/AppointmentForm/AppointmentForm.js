import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
const bookingData = [
  {
    _id: "5e8df50be6e8231764dc23de",
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: "10 SPACES AVAILABLE"
  },
  {
    _id: "5e8df578e6e8231764dc23df",
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "10:50 AM - 11:30 AM",
    totalSpace: "10 SPACES AVAILABLE"
  },
  {
    _id: "5e8df5aee6e8231764dc23e0",
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "5:00 PM - 6:00 PM",
    totalSpace: "10 SPACES AVAILABLE"
  },
  {
    _id: "5e8df63be6e8231764dc23e1",
    id: 4,
    subject: "Cavity Protection",
    visitingHour: "7:00 AM - 8:30 AM",
    totalSpace: "10 SPACES AVAILABLE"
  },
  {
    _id: "5e8df68de6e8231764dc23e2",
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: "10 SPACES AVAILABLE"
  },
  {
    _id: "5e8df6a0e6e8231764dc23e3",
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: "10 SPACES AVAILABLE"
  }
];
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  // my implement code
  const [check, setCheck] = useState([]);
  useEffect(() => {
    fetch(
      "https://stark-temple-71384.herokuapp.com/appointments?service=" +
      appointmentOn
    )
      .then(res => res.json())
      .then(data => setCheck(data));
  }, []);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();
    if (check.length < 10) {
      fetch("https://stark-temple-71384.herokuapp.com/addAppointment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(success => {
          if (success) {
            closeModal();
            alert("Appointment created successfully.");
            window.location.reload();
          }
        });

    } else {
      alert("Sorry space not avalable ");
      closeModal();
    }

  };

// implement email checking system 

  const [status, setStatus] = useState(false);
  const handleCheckData = (e) => {
    const email = e.target.value;
    fetch(`http://localhost:5000/emailCheck?email=${email}`)
    .then( res => res.json())
    .then(data => {
      if (data.length > 0) {
        alert('Email already used')
        setStatus(true)
      }else {
        setStatus(false)
      }
    })

  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center" style={{ color: "#1cc7c1" }}>
          {appointmentOn}
        </h2>
        <p className="text-center text-secondary">
          <small>ON {date.toDateString()}</small>
        </p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              ref={register({ required: true })}
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              ref={register({ required: true })}
              name="phone"
              placeholder="Phone Number"
              className="form-control"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
            onBlur={handleCheckData}
              type="email"
              ref={register({ required: true })}
              name="email"
              placeholder="Email"
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                name="gender"
                ref={register({ required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                ref={register({ required: true, min: 0, max: 120 })}
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">please input up to 0-120</span>
              )}
            </div>
            <div className="col-4">
              <input
                ref={register({ required: true })}
                className="form-control"
                name="weight"
                placeholder="Weight"
                type="number"
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group text-right">
            <button
              type="submit"
              disabled={status}
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
