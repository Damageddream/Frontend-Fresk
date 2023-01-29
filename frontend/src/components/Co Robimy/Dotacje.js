import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import eu from "../../images/eu.jpg";

const Dotacje = () => {
  // data for jumbotron
  const opis = {
    title: "Projekty",
    photo: eu,
  };
  return (
    <>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col className='m-5'>
          <h2 className='text-center'>ZARZĄDZANIE PROJEKTEM</h2>
          <br />
          <p>Wybór projektu oraz uzyskanie dofinansowania to dopiero początek drogi, wielu naszych klientów nie zdaje sobie sprawy z ogromu pracy i ilości dokumentacji potrzebnej przy prowadzeniu projektów, szczególnie gdy wcześniej nie mieli z nimi do czynienia </p>
          <p>Najczęstsze problemy pojawiają się w czasie realizacji projektu. Większość beneficjentów i wnioskodawców, które realizują projekt tylko pobieżnie zapoznaje się z umową o dofinansowanie, oraz wytycznymi dotyczącymi kwalifikowalności wydatków. Czyli podręcznikiem beneficjenta, który jest obszerny i obfity w zawiłości.</p>
          <p> Z tego powodu powstaje duże ryzyko naliczenia kar przy błędach w postępowaniu (od 5 nawet do 100% wartości dofinansowania), a w skrajnych wypadkach nawet rozwiązanie umowy o i zwrot całości środków z dofinansowania.</p>
          <p> Aby spełnić oczekiwania naszych klientów, przygotowaliśmy pełną ofertę w zakresie zarządzania projektami. Od momenty zawarcia umowy aż do przeprowadzenia ostatnich działań.
          </p>
        </Col>
        <Col className='m-5'>
          <h2 className='text-left'>Oferujemy:</h2>
          <br />
          <ul>
            <li>Wypełnienie obowiązków  informacyjno- promocyjnych
            </li>
            <li>Przygotowanie dokumentów przetargowych</li>
            <li>Przygotowanie dokumentów przetargowych</li>
            <li>Rekrutacja uczestników</li>
            <li>Znalezienie podwykonawców </li>
            <li>Przygotowanie umów z podwykonawcami</li>
            <li>Przygotowanie szablonów dokumentów projektowych</li>
            <li>Pomoc przy prowadzeniu dokumentacji projektowej </li>
            <li>Sprawdzenie poprawności dokumentacji, zdanej przez podwykonawców</li>
            <li>Sprawdzenie kwalifikowalności uczestników i poprawności wypełnienia dokumentacji rekrutacyjnej</li>
            <li>Organizacja logistyki projektowej(miejsce, catering, materiały)</li>

          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Dotacje;
