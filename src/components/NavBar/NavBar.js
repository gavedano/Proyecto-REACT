import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo-hyperlink.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
const NavBarBootstrap = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/Home ">
            <img src={logo} className="logo-nav" alt="main-logo" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/Catalogo">Catalogo</Nav.Link>
            <Nav.Link href="/Celulares">Celulares</Nav.Link>
            <Nav.Link href="/Accesorios">Accesorios</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBarBootstrap;
