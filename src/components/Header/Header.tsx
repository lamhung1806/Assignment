import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
export function Header() {
  return (
    <Navbar bg="light">
      <Container className="justify-content-center">
        <Navbar.Brand href="#">User List</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
