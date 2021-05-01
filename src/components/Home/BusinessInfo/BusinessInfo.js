import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
const infosData = [
  {
    title: "Opening Hours",
    description: "We are open from 7 a.m",
    icon: faClock,
    background: "primary"
  },
  {
    title: "Visit Our Location",
    description: "Dhaka",
    icon: faMapMarker,
    background: "dark"
  },
  {
    title: "Call US Now",
    description: "0171786578",
    icon: faPhone,
    background: "primary"
  }
];

const BusinessInfo = () => {
  return (
    <section className="row justify-content-center">
      <div className="w-75 row ">
        {infosData.map(info => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
