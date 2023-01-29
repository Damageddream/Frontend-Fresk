import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import ListaUslug from "./ListaUslug";

const CoRobimy = () => {
  const opis = {
    title: "Projekty i Usługi",
    photo: "src",
  };
  return (
    <div>
      
      <Row>
        <ListaUslug />
      </Row>
    </div>
  );
};

export default CoRobimy;
