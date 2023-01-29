import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/fresk-logo-beznapi.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../sass/components/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "./Utilities/Context";

function Navbar2() {
  //hook for redirecitng after search and passing search data
  let navigate = useNavigate();

  //context for for checking if user is logged in
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  //adding data from search into state and handle searching
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search", { state: { src: search } });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="auto"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1 justify-content-evenly">
            <NavLink to="/" className="nav-linky">
              Strona Główna
            </NavLink>
            <NavLink to="/aktualnosci" className="nav-linky">
              Aktualności
            </NavLink>
            <NavLink to="/ofundacji" className="nav-linky">
              O Fundacji
            </NavLink>
            <NavLink to="/corobimy" className="nav-linky">
              Co robimy
            </NavLink>
            <NavLink to="/kontakt" className="nav-linky">
              Kontakt
            </NavLink>
            {isLoggedIn && (
              <NavLink to="/logout" className="nav-linky ms-5">
                Wyloguj
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/profile" className="nav-linky">
                Profil
              </NavLink>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Szukaj"
              className="me-2"
              aria-label="Szukaj"
              onChange={(e) => {
                handleSearchChange(e);
              }}
            />
            <Button onClick={handleSearch} type="submit" variant="primary">
              Szukaj
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
