import Carousel2 from "../Carousel2";
import Cards from "../Cards/Cards";
import Main from './main'
import Container from "react-bootstrap/Container";


const MainPage = () => {
  return (
    <div>
      <Carousel2 />
      <Container fluid>
        <Cards />
        <Main />
      </Container>
    </div>
  );
};

export default MainPage;