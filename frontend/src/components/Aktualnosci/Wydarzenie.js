import Moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../sass/components/wydarzenie.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'

function Wydarzenie(props) {
  //cleaning up data formating
  const formatDate = Moment(props.date).format("DD.MM.YYYY");


  return (
    <div className="my-5">
      <Row className="newsContainer d-flex justify-content-center">
        <Col lg='3' className='d-flex flex-column align-items-center'>
          <Image
            rounded
            className="newsPhoto"
            src={props.title_image}
            alt={props.title}
          />
        </Col>
        <Col lg='6'>
          <Card border="dark">
            <Card.Body className="d-flex flex-column">
              <Card.Title><h1>{props.title}</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted fs-6">
                Dodane: {formatDate} 
              </Card.Subtitle>
              <Card.Text>
                {props.contentPreview}
              </Card.Text>
              <Link to={`/aktualnosci/${props.id}`} state={props.id} className="mt-auto">
                Zobacz więcej
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wydarzenie;
