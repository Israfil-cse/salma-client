import React, { useEffect, useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // my implement code

  const [check, setCheck] = useState([]);
  console.log(check.length);
  useEffect(() => {
    fetch(
      "https://stark-temple-71384.herokuapp.com/appointments?service=" +
        booking.subject
    )
      .then(res => res.json())
      .then(data => setCheck(data));
  }, []);

  // for availabe sites
  const AvailableSites = 10 - check.length;

  // click and change btn

  const [isClicked, setIsClicked] = useState(false);
  // console.log(isClicked);
  // useEffect(() => {
  //   const data = check.length === 10;
  // setIsClicked(data)
  // },[check.length]);

  // const newdate = new Date();
  // let isvalid = false;
  // if ( date.getDate() === newdate.getDate() ) {
  //    isvalid = true
  // }else{
  //    isvalid = date.getTime() < newdate.getTime();
  // }

  const newdate = new Date();
  const isvalid = date.getDate() < newdate.getDate();

  return (
    <div className="col-md-4 ">
      <div class="card mb-5">
        <div class="card-body p-3">
          <h3 style={{ color: "#1cc7c1" }}>{booking.subject}</h3>
          <h4>{booking.visitingHour}</h4>
          <h6>
            <small> total space:10</small>
          </h6>
          <small>{AvailableSites} SPACES AVALABLE</small>
          <br />

          <button
            disabled={isvalid}
            onClick={() => {
              openModal();
            }}
            className="btn btn-primary"
          >
            {isvalid ? "× Can't book" : "BOOK APPOINTMENT"}
          </button>

          {/* <button disabled={isClicked} onClick={() => {
           openModal()
           
          }} className="btn btn-primary">
            {isClicked ? "× Can't book" : "BOOK APPOINTMENT"}
          </button> */}

          <AppointmentForm
            modalIsOpen={modalIsOpen}
            appointmentOn={booking.subject}
            closeModal={closeModal}
            date={date}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
