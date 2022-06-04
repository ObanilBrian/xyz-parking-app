import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-center border py-2 fixed-bottom bg-white">
      <Container>
        <Row>
          <Col>&copy; All Rights Reserved.</Col>
        </Row>
      </Container>
    </footer>
  );
}
