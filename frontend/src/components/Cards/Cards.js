import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Karta from "./karta";
import dotacje from "../../images/dotacje.png";
import ksiazka from "../../images/ksiazka.png";
import rece from "../../images/rece.png";

const Cards = () => {
  const Karty = [
    {
      id: "k1",
      title: "Usługi",
      opis: "",
      foto: dotacje,
    },
    {
      id: "k2",
      title: "Kursy i Projekty",
      opis: "",
      foto: ksiazka,
    },
    {
      id: "k3",
      title: "Współpraca",
      opis: "",
      foto: rece,
    },
  ];

  return (
    <div>
      <Row className="mt-5">
        {Karty.map((karta) => (
          <Col className="d-flex justify-content-center">
            <Karta
              key={karta.id}
              title = {karta.title}
              opis = {karta.opis}
              foto = {karta.foto}
               />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
