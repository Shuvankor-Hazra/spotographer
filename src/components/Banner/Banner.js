import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("hero.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  return (
    <Carousel className="slider carousel-fade">
      {slider.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
          <Carousel.Caption>
            <h5>{item.subheading}</h5>
            <h1>{item.heading}</h1>
            <p>{item.text}</p>
            <a href="http://localhost:3000/#home" className="button">
              {item.button}
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;

/* <section className="slider carousel slide carousel-fade"></section> */
