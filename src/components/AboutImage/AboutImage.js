import React from "react";
import Col from "react-bootstrap/esm/Col";
import AboutImg from "../../images/about-image.png";

const AboutImage = () => {
  return (
    <Col md={5}>
      <img src={AboutImg} alt="" className="w-100 px-3" />
    </Col>
  );
};

export default AboutImage;
