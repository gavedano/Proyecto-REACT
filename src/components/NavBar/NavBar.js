import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo-hyperlink.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const NavBarBootstrap = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HYPERLINK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Celulares</Nav.Link>
            <Nav.Link href="#features">Computadores</Nav.Link>
            <Nav.Link href="#pricing">Tablets</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
export default NavBarBootstrap;
