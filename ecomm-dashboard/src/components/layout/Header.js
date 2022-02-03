import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Nav className="me-auto navbar-wrapper">
          <Link to='/'>Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
