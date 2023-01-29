import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import kursy from "../../images/kurs.jpg";

const Projekty = () => {
  // data for jumbotron
  const opis = {
    title: "Kursy",
    photo: kursy,
  };
  return (
    <>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col className='m-5'>
          <h2 className='text-center'>Firma szkoleniowa</h2>
          < br />
          <p>Wychodząc naprzeciw oczekiwaniom naszych Klientów, organizujemy szkolenia zawodowe, szkolenia unijne, kursy z kompetencji miękkich i wiele innych zróżnicowanych  szkoleń i warsztatów:</p>
          <ul>
            <li>Drony - Certyfikat kompetencji pilota w kategorii otwartej i szczególnej</li>
            <li>Obróbka zdjęć</li>
            <li>Event Manager</li>
            <li>Barman</li>
            <li>Barista</li>
            <li>Zarządzanie projektami</li>
          </ul>
          <p>Celem naszych szkoleń, jest przekazanie rzetelnej i aktualnej wiedzy w sposób przystępny dla każdego. Z dbałością o szczegóły, dbamy o zadowolenie klientów.</p>

        </Col>
        <Col className='m-5'>
          <h2 className='text-center'>Zapewniamy</h2>
          <br />
          <h4 className='text-center'>Organizacja szkoleń </h4>
          Nasza kadra składa się z wysoko wykwalifikowanych specjalistów, którzy posiadają szeroką wiedzę zarówno praktyczną jak i teoretyczną, są pasjonatami w danej dziedzinie i posiadają wieloletnie doświadczenie.
          <h4 className='text-center'>Lokalizacja</h4>
          Lokalizacja
          Organizujemy szkolenia na szczególnie na terenie województw: Podlaskiego i Warmińsko-Mazurskiego, ale w razie indywidualnych potrzeb możemy organizować je na terenie całej Polski.
          <h4 className='text-center'>W ramach indywidualnych potrzeb</h4>
          Organizujemy szkolenia zarówno stacjonarne jak i zdalne, posiadamy własną salę szkoleniową, oraz sprzęt do szkoleń, który w ramach potrzeb dowieziemy i doślemy w wybrane przez klienta miejsce.

        </Col>
      </Row>
    </>
  );
};

export default Projekty;
