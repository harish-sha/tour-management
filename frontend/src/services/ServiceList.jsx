import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import CustomizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Calculate the weather for any location in the world.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Get the best tour guide for your trip. Enjoy your every journey",
  },
  {
    imgUrl: CustomizationImg,
    title: "Customization",
    desc: "Customize your trip according to your needs.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
