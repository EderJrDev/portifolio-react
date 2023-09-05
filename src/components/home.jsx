import { Container, Row, Col } from "react-bootstrap";
import header from "../assets/img/header-img.svg";
import "../css/menu.css";

export function Home() {
  return (
    <>
      <Container />
      <Row className="p-5">
        <Col className="p-0 m-auto">
          <p className="title">Desenvolvedor Front-end</p>
          <p>
            Olá! Eu sou o Eder Jr. Engenheiro de Software e Desenvolvedor Web.
          </p>
        </Col>
        <Col className="p-0 text-center">
          <div className="banner">
            <img src={header} alt="astronaut" />
          </div>
        </Col>
      </Row>
      <Container />
    </>
  );
}
