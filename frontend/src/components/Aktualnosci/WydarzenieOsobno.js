import { useLocation, useNavigate, } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plik from "./Dodaj do wydarzenia/Plik";
import Obraz from "./Dodaj do wydarzenia/Obraz";
import UsunWydarzenie from "./Dodaj do wydarzenia/UsunWydarzenie";
import EdytujWydarzenie from "./Dodaj do wydarzenia/EdytujWydarzenie";
import DownloadFile from "./Dodaj do wydarzenia/DownloadFile";
import draftToHtml from "draftjs-to-html";
import Galeria from "./Dodaj do wydarzenia/Galeria";
import '../../sass/components/wydarzenieOsobno.css'
import Image from 'react-bootstrap/Image'
import AuthContext from "../Utilities/Context";

const WydarzenieOsobno = () => {


  //context for for checking if user is logged in
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const location = useLocation();
  const [aktualnosci, setNewAktualnosci] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  //setting text editor into html
  const content = { __html: draftToHtml(aktualnosci.content) };

  //state for render when succesfully added file
  const [addedFile, setAddedFile] = useState(false)

  //state for render when succesfully added image
  const [addedImage, setAddedImage] = useState(false)

  //state for render when succesfully edited wydarzenie
  const [editedWydarzenie, setEditedWydarzenie] = useState(false)




  // fetch data after render
  useEffect(() => {
    getAktulanosci();
  }, []);

  // fetch data after render
  useEffect(() => {
    getAktulanosci();
  }, [editedWydarzenie]);


  let locationId = location.pathname.slice(13);

  function getAktulanosci() {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `/api/aktualnoscis/${location.state}/`,
    })
      .then((response) => {
        const data = response.data;
        setNewAktualnosci(data);
        console.log('hi')
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response);
          setError(error.response.status);
          setError(error.response.headers);
        }
      });
    setIsLoading(false);
  }
  return (
    <Row>
      <Row className='imgnews my-5 justify-content-md-center'>
        <Col md='8' className='imgnews'>
          <Image
            className='NewsPicture'
            src={aktualnosci.title_image}
            alt={aktualnosci.title}
          />
          Dodane:{Moment(aktualnosci.date).format("DD.MM.YYYY")}
        </Col>
      </Row>
      <Row className='mb-5 justify-content-md-center'>
        <Col sm='12'>
          <h1 className="text-center">{aktualnosci.title}</h1>
        </Col>
      </Row>
      <Row className='mb-5 justify-content-md-center'>
        <Col md='2' className="m-3 d-flex flex-column align-items-left">
          {isLoggedIn && (
            <>
              <Plik wydarzenie={locationId} setAddedFile={setAddedFile} />
              <Obraz wydarzenie={locationId} setAddedImage={setAddedImage} />
              <EdytujWydarzenie
                setEditedWydarzenie={setEditedWydarzenie}
                className="mb-2"
                wydarzenie={locationId}
                title={aktualnosci.title}
                title_image={aktualnosci.title_image}
                content_preview={aktualnosci.content_preview}
                content={aktualnosci.content}
              />
              <UsunWydarzenie wydarzenie={locationId} />
            </>
          )}
        </ Col>
        <Col className="m-3 justify-content-md-center">
          <div dangerouslySetInnerHTML={content}></div>
        </Col>
        <Col md='2' className=" ms-3 d-flex flex-column align-items-left">
          <DownloadFile wydarzenie={locationId} addedFile={addedFile} />
        </Col>
      </Row>
      <Row>
        <Galeria wydarzenie={locationId} addedImage={addedImage} />
      </Row>
    </Row >
  );
};

export default WydarzenieOsobno;
