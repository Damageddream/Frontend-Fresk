import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Wydarzenie from "./Wydarzenie";
import Paginat from "./Pagination";
import { useLocation } from "react-router-dom";

function WyszukaneAktualnosci() {
  //get value that is searched
  const searchedFor = useLocation();

  // getting all of aktualnosci from backend and filter them by search
  const [aktualnosci, setNewAktualnosci] = useState([]);

  // setting loading state
  const [isLoading, setIsLoading] = useState(false);
  // setting for instance of error
  const [error, setError] = useState();

  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [active, setActive] = useState(1);



  //fires function for getting data from backend after page loads
  useEffect(() => {
    getAktulanosci();
  }, [searchedFor]);

  // fetching aktualnosci from backend and filtering them by search
  function getAktulanosci() {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "/api/aktualnoscis/",
    })
      .then((response) => {
        const data = response.data;
        const filteredAktualnsoci = data.filter((wydarzenie) =>
          wydarzenie.title
            .toLowerCase()
            .includes(searchedFor.state.src.toLowerCase())
        );
        console.log(filteredAktualnsoci);
        setNewAktualnosci(filteredAktualnsoci);
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

  // pagination variables
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = aktualnosci.slice(indexOfFirstPost, indexOfLastPost);

  //change page in pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(pageNumber);
  };

  return (
    <div className="d-flex justify-content-center">
      <Row>
        <Col>
          {isLoading && <p>Trwa pobieranie aktualności</p>}

          {!isLoading && aktualnosci.length === 0 && !error && (
            <p>Brak Aktualności</p>
          )}

          {!isLoading && error && <p>Wystąpił błąd: {error}</p>}

          {!error &&
            currentPosts &&
            currentPosts.map((wydarzenie) => (
              <Wydarzenie
                key={wydarzenie.id}
                id={wydarzenie.id}
                title={wydarzenie.title}
                title_image={wydarzenie.title_image}
                content={wydarzenie.content}
                contentPreview={wydarzenie.content_preview}
                date={wydarzenie.date}
                username={wydarzenie.username}
              />
            ))}
          <Row>
            <Col className="d-flex justify-content-center">
              <Paginat
                postsPerPage={postsPerPage}
                totalPosts={aktualnosci.length}
                paginate={paginate}
                active={active}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default WyszukaneAktualnosci;
