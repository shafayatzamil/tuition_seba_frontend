import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className="navbar-dark px-auto bg-primary "
        >
          <Container fluid>
            <Navbar.Brand className="fs-4 fw-bold" href="#">
              Tuition Seba Forum 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                className=" navbar-dark text-bg-primary "
              >
                <Offcanvas.Title
                  className="fs-4 fw-bold"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Tuition Seba Forum
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=" fw-semibold">
                <Nav className="justify-content-end  text-light flex-grow-1 pe-3 ">
                  <Nav.Link href="#action1">Available Tuitions</Nav.Link>
                  <Nav.Link href="#action2">Find Tutor</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                </Nav>
                {/* <Button variant="outline-success">Login</Button> */}
                <div className="d-flex gap-2">
                  <Button variant="warning">login</Button>
                  <Button variant="info">Signup</Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
