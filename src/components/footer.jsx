import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css';

export function Footer() {
    return (
        <Container id='contatosId'>
            <Row>
                <Col id='contatos' className='section'>
                    <div className='container3'></div>
                    <div className="pt-3 m-auto">
                        <article class="text-center">
                            <h1 className="title">Gostou?</h1>
                        </article>
                    </div>
                    <div className="contato-container">
                        <h2>Contate-me</h2>
                        <div className="icones-container">
                            <a href="https://www.instagram.com/ederjuninho_/" target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://github.com/EderJrDev" target='_blank'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/eder-junior-72b350168/" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <p>© 2023 Eder Jr. Todos os direitos reservados.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}