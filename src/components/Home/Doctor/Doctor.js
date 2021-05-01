import React from "react";

const Doctor = props => {
  const { name, email, img } = props.doctor;
  console.log(props.doctor);

  return (
    <div className="col-md-4">
      <div className="">
        {props.doctor.image ? (
          <img
            style={{ height: "200px" }}
            src={`data:image/png;base64,${props.doctor.image.img}`}
          />
        ) : (
          <img
            style={{ height: "200px" }}
            className="img-fluid mb-3"
            src={`https://stark-temple-71384.herokuapp.com/${props.doctor.img}`}
            alt=""
          />
        )}
        <div className="text-center mt-3">
          <h5>{name}</h5>
          <small>{email}</small>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
