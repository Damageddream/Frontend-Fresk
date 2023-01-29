import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "../Jumbotron";
import Register from "./Register.js";
import ProfilWiadomosci from "./ProfileWiadomosci";

const Profil = () => {
  // data for jumbotron on top
  const opis = {
    title: "Profil",
    photo: "",
  };

  //Setting className to active or ''
  const [isActiveh, setIsActiveh] = useState(false);
  const [isActiveo, setIsActiveo] = useState(true);


  //seeting one of list items as active and rest as inactive
  const wiadomosciHandler = () => {
    setIsActiveh(true);
    setIsActiveo(false);
  };


  const registerHandler = () => {
    setIsActiveo(true);
    setIsActiveh(false);
  };
  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row className="justify-content-center">
        <Col className="mt-5 ms-5">
          <ListGroup as="ul">
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              as="li"
              onClick={registerHandler}
              className={
                isActiveo ? "list-group-item active" : "list-group-item"
              }
            >
              Wiadomości
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              as="li"
              onClick={wiadomosciHandler}
              className={
                isActiveh ? "list-group-item active" : "list-group-item"
              }
            >
              Zarejestruj użytkownika
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} className="m-5">
          <div>
            {isActiveo && <ProfilWiadomosci  />}
          </div>
          <div className="text-center">{isActiveh && <h4>Zarejestruj</h4>}</div>
          <div>
            {isActiveh && (
                <Register />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profil;
