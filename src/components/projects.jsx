import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

import '../css/projects.css';
import '../css/footer.css';
import js from '../assets/img/js.jpg.png';
import link from '../assets/img/link.webp.png';
import nlw from '../assets/img/nlw.png';
import pokemon from '../assets/img/pokemon.jpg';
import { Footer } from './footer';

export function Projects() {

    return (
        <>
            <Container className="body">
                <Row className="px-3">
                    <Col md={12}>
                        <article class="text-center">
                            <h1 className="title">Projetos</h1>
                            <p>
                                Projetos realizados durante os meus estudos.
                            </p>
                        </article>
                    </Col>
                    <Col md={6} className='bg-hover'>
                        <div className="card card-01">
                            <img src={js} alt="Card image cap" />
                        </div>
                        <div className="texto">
                            <p>Texto em destaque</p>
                        </div>
                    </Col>
                    <Col md={6} className='bg-hover'>
                        <div className="card card-01">
                            <img src={link} alt="Card image cap" />
                        </div>
                        <div className="texto">
                            <p>Texto em destaque</p>
                        </div>
                    </Col>
                </Row>
                <Row className='px-3'>
                    <Col md={6} className='bg-hover'>
                        <div className="card card-01">
                            <img src={nlw} alt="Card image cap" />
                        </div>
                        <div className="texto">
                            <p>Texto em destaque</p>
                        </div>
                    </Col>
                    <Col md={6} className='bg-hover'>
                        <div className="card card-01">
                            <img src={pokemon} alt="Card image cap" />
                        </div>
                        <div className="texto">
                            <p>Texto em destaque</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </>
    )
}