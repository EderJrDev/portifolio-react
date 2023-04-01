import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';

export function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="pt-3">
                        <article class="text-center">
                            <h1 className="title">Gostou?</h1>
                        </article>
                    </div>
                    <div className="contato-container">
                        <h2>Contate-me</h2>
                        <div className="icones-container">
                            <a href="https://www.instagram.com/seuinstagramaqui/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/seulinkedin/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/seugithubaqui">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <p>Todos os direitos reservados</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}