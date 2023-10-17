import React from "react";
import "../css/projects.css";
import "../css/footer.css";

import js from "../assets/img/js.webp";
import nlw from "../assets/img/nlw.webp";
import restaurant from "../assets/img/restaurant.webp";
import game from "../assets/img/game-flappy.png";

import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub } from "@fortawesome/free-brands-svg-icons";

export function Projects() {
  return (
    <>
      <Container id="projetos" className="body-color">
        <Col md={12} className="py-5">
          <article className="text-center">
            <h1 className="title text-white">Projetos</h1>
          </article>
        </Col>
        <div className="row">
          <Row className="px-3 text-center">
            <Col id="link" md={4} className="bg-hover pb-5">
              <div className="card card-01">
                <img src={restaurant} className="fullscreen" alt="Card image" />
              </div>
              <div className="texto">
                <p>
                  Landing Page com uma interface elegante e intuitiva, permite
                  que os usuários explorem o cardápio diversificado do
                  restaurante.
                  <a
                    className="link bg"
                    href="https://restaurantedadulci-ederjrdev.bohr.io"
                    target="_blank"
                  >
                    {" "}
                    Veja o Projeto{" "}
                  </a>
                  <FontAwesomeIcon icon={faDev} />
                </p>
              </div>
            </Col>
            <Col md={4} className="bg-hover pb-5">
              <div className="card card-01">
                <img src={nlw} className="fullscreen" alt="Card image" />
              </div>
              <div className="texto">
                <p>
                  Evento da Rocketseat. Desenvolvi uma aplicação completa onde o
                  usuário pode registrar suas tarefas diárias durante o mês.
                  <a
                    className="link bg"
                    href="https://github.com/EderJrDev/Nlw-Setup"
                    target="_blank"
                  >
                    {" "}
                    Repositório{" "}
                  </a>
                  <FontAwesomeIcon icon={faGithub} />
                </p>
              </div>
            </Col>
            <Col md={4} className="bg-hover pb-5">
              <div className="card card-01">
                <img src={game} className="fullscreen" alt="Card image" />
              </div>
              <div className="texto">
                <p>
                  Jogo Flappy Bird, projeto feito usando Javascript puro, afim
                  de conhecer e entender o potencial da linguagem.
                  <a
                    className="link bg"
                    href="https://github.com/EderJrDev/Game-Flappy-Bird"
                    target="_blank"
                  >
                    {" "}
                    Repositório{" "}
                  </a>
                  <FontAwesomeIcon icon={faGithub} />
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
