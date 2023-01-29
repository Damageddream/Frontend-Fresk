import Card from 'react-bootstrap/Card';

function Pracownik(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.function}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Pracownik;