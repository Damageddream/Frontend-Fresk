import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import fundacja from '../../images/fresk-logo.png'
import Pracownik from "./KartaPracownik";
import "../../sass/components/logo.css";
import Hania from '../../images/Hania.png';
import Magda from '../../images/Magda.png';
import Marcin from '../../images/Marcin.png';


const Ofundacji = () => {


  // data for jumbotron on top
  const opis = {
    title: "Fundacja Rozwoju Edukacji i Społecznej Kreatywności",
    photo: fundacja,

  };

  // workers data for cards
  const Hanna = {
    name: 'Hanna Maria Pawluczyk',
    photo: Hania,
    function: 'Prezes Zarządu'
  }

  const Magdalena = {
    name: 'Magdalena Ewelina Anuszkiewicz',
    photo: Magda,
    function: 'Specjalista do spraw szkoleń'
  }

  const Marcan = {
    name: 'Marcin Grabowski',
    photo: Marcin,
    function: 'Specjalista do spraw szkoleń'
  }


  //Setting className to active or ''
  const [isActiveh, setIsActiveh] = useState(false);
  const [isActiveo, setIsActiveo] = useState(true);
  const [isActiver, setIsActiver] = useState(false);
  const [isActivez, setIsActivez] = useState(false);

  //seeting one of list items as active and rest as inactive
  const historiaHandler = () => {
    setIsActiveh(true);
    setIsActiver(false);
    setIsActivez(false);
    setIsActiveo(false);
  };
  const radaHandler = () => {
    setIsActiver(true);
    setIsActiveh(false);
    setIsActivez(false);
    setIsActiveo(false);
  };
  const zespolHandler = () => {
    setIsActivez(true);
    setIsActiver(false);
    setIsActiveh(false);
    setIsActiveo(false);
  };

  const oNasHandler = () => {
    setIsActiveo(true);
    setIsActiver(false);
    setIsActivez(false);
    setIsActiveh(false);
  };
  return (
    <div>
      <div className='logoContainer'>
        <div
          id='freskPhoto'
          className="center bg-image"
          style={{
            backgroundImage:
              `url(${opis.photo})`,
          }}
        >
        </div>
      </div>
      <Row className='justify-content-center'>
        <Col className="mt-5 ms-5">
          <ListGroup as="ul">
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={oNasHandler}
              className={
                isActiveo ? "list-group-item active" : "list-group-item"
              }
            >
              O nas
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={historiaHandler}
              className={
                isActiveh ? "list-group-item active" : "list-group-item"
              }
            >
              Historia Fundacji
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={radaHandler}
              className={
                isActiver ? "list-group-item active" : "list-group-item"
              }
            >
              Rada i Zarząd
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              as="li"
              onClick={zespolHandler}
              className={
                isActivez ? "list-group-item active" : "list-group-item"
              }
            >
              Zespół
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} className="mt-5">
          <div className='text-center'>
            {isActiveo && <h4>FUNDACJA ROZWOJU EDUKACJI I SPOŁECZNEJ KREATYWNOŚCI</h4>}
          </div>
          <div>
            {isActiveo && <p className='text-center'>Nullam at arcu viverra, gravida urna vitae, posuere urna.
              In hac habitasse platea dictumst. Maecenas sit amet nisi et libero consequat finibus.
              Maecenas quam erat, efficitur vel aliquam at, finibus ut neque.
              Vivamus in urna accumsan, semper metus ac, sollicitudin ligula.
              Phasellus sodales eget urna quis gravida. Praesent id ligula quam. Aenean commodo eu orci sit amet sollicitudin.
              Suspendisse potenti. Integer eu lectus bibendum, consequat nisl ut, rhoncus purus.
              Vivamus erat magna, pellentesque eget augue a, pharetra laoreet leo.
              Maecenas eu tellus magna. Vestibulum ut eros vel est accumsan finibus.
              Aliquam tincidunt dignissim leo, laoreet blandit orci pulvinar a.
              Vivamus dapibus gravida lectus, pulvinar egestas turpis mollis at.
              Fusce iaculis a sem non bibendum.</p>}
          </div>
          <div className='text-center'>
            {isActiveh && <h4>HISTORIA</h4>}
          </div>
          <div>
            {isActiveh && <p className='text-center'>Nullam at arcu viverra, gravida urna vitae, posuere urna.
              In hac habitasse platea dictumst. Maecenas sit amet nisi et libero consequat finibus.
              Maecenas quam erat, efficitur vel aliquam at, finibus ut neque.
              Vivamus in urna accumsan, semper metus ac, sollicitudin ligula.
              Phasellus sodales eget urna quis gravida. Praesent id ligula quam. Aenean commodo eu orci sit amet sollicitudin.
              Suspendisse potenti. Integer eu lectus bibendum, consequat nisl ut, rhoncus purus.
              Vivamus erat magna, pellentesque eget augue a, pharetra laoreet leo.
              Maecenas eu tellus magna. Vestibulum ut eros vel est accumsan finibus.
              Aliquam tincidunt dignissim leo, laoreet blandit orci pulvinar a.
              Vivamus dapibus gravida lectus, pulvinar egestas turpis mollis at.
              Fusce iaculis a sem non bibendum.</p>}
          </div>
          {isActiver &&
            <Col className='d-flex justify-content-center'>
              <Pracownik name={Hanna.name} image={Hanna.photo} function={Hanna.function} />
            </ Col>
          }

            {isActivez &&
              <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                  <Pracownik className='my-3' name={Magdalena.name} image={Magdalena.photo} function={Magdalena.function} />
                </ Col>
                <Col className='d-flex justify-content-center'>
                  <Pracownik name={Marcan.name} image={Marcan.photo} function={Marcan.function} />
                </Col>
              </ Row>
            }
        </Col>
      </Row>
    </div>
  );
};

export default Ofundacji;
