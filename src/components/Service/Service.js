import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./Service.css";

const Service = ({ item }) => {
  return (
    <Col md={4}>
      <div className="single-service mt-4">
        <img src={item.img} alt="" className="w-100" />
        <div className="service-text p-3">
          <h4>{item.name}</h4>
          <h5>item: ${item.price}</h5>
          <p>{item.description}</p>
          <a href="http://localhost:3000/#home" className="button">
            Book now
          </a>
        </div>
      </div>
    </Col>
  );
};

export default Service;
