import React, { useState } from "react";
import "../sass/components/carousel.css";
import logo from "../images/fresk-logo.png";
import eu from "../images/eu.jpg";
import kurs from "../images/kurs.jpg";
import Carousel from "react-bootstrap/Carousel";

const Carousel2 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carosuel-item">
        <img id="logo" className="d-block" src={logo} alt="First slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img id="kurs" className="d-block" src={kurs} alt="Second slide" />

        <Carousel.Caption className="c-caption">
          <div className="c-text">
            <h3>Kursy i Szkolenia</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="eu" className="d-block" src={eu} alt="Third slide" />

        <Carousel.Caption className="c-caption">
          <div className="c-text">
            <h3>Dotacje</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;
