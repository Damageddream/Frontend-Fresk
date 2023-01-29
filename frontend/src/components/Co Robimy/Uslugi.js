import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import sala from "../../images/sala.jpg";

const Uslugi = () => {
  // data for jumbotron
  const opis = {
    title: "Usługi",
    photo: sala,
  };

  return (
    <>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col className='m-5'>
        <h2 className='text-center'>Wynajem sali</h2>
          < br />
          <p>Sala konferencyjna i szkoleniowa Fundacji Rozwoju Edukacji i Społecznej Kreatywności zlokalizowana jest w budynku przy ul. Noniewicza 34 w Suwałkach jest przeznaczona do prowadzenia szkoleń, spotkań, konferencji i pokazów. Rozmiar przestrzeni pozwala również na swobodne organizowanie innych podobnych wydarzeń.</p>
          <p>Dzięki dostępowi do Internetu oraz kompleksowemu oświetleniu sala nadaję się do prowadzenia webinariów oraz zajęć zdalnych. </p>
          <p>Jedną z zalet Sali jest lokalizacja, sala jest w budynku, który mieści się w samym centrum Suwałk, blisko placu im. Marii Konopnickiej, zabytkowej ulicy chłodnej oraz wielu sklepów i restauracji.  W okolicy znajduje się wiele przestrzeni parkingowej,  dobre połączenia autobusowe z pobliskim przystankiem oraz postój taksówek. Sala posiada własną pompę ciepła, zarówno do klimatyzowania jak i grzania pomieszczenia, kącik gastronomiczny z ekspresem do kawy. Dodatkowo w Sali znajduje się, rzutnik multimedialny oraz tablica suchościeralna a także w razie potrzeby flipchart. </p>
          <p>Sala wyposażona jest w 6 stołów, które można swobodnie łączyć i rozdzielać dzięki czemu mogą odbywać się w niej szkolenia grupowe, indywidualne, konferencje oraz spotkania biznesowe. Do dyspozycji jest 12 miejsc siedzących dla uczestników + miejsce dla prowadzącego. Sala jest dostępna 7 dni w tygodniu 24 godziny na dobę</p>
          <p>Koszt 70 zł na godzinę. </p>
        </Col>
        <Col className='m-5'>
          Zdjecia sali
          <ul>
            <li>zdjecie</li>
            <li>zdjecie</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Uslugi;
