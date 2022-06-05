import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar className="border sticky-top bg-white">
        <Container>
          <Navbar.Brand href="/">XYZ Parking System</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/account/login">Login</Nav.Link>
              <Nav.Link href="/account/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
