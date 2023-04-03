import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

import '../css/projects.css';
import '../css/footer.css';
import js from '../assets/img/js.webp';
import link from '../assets/img/link.webp';
import nlw from '../assets/img/nlw.webp';
import pokemon from '../assets/img/pokemon.webp';

export function Projects() {
    return (
        <>
            <Container id="projetos" className="body-color">
                <Row className="px-3">
                    <Col md={12} className='py-5'>
                        <article class="text-center">
                            <h1 className="title text-white">Projetos</h1>
                        </article>
                    </Col>
                    <Col md={6} className='bg-hover pb-5'>
                        <div className="card card-01">
                            <img src={js} className='fullscreen' alt="Card image" />
                        </div>
                        <div className="texto">
                            <p>"Projeto desenvolvido em React que consiste em um quiz de JavaScript, permitindo aos usuários testarem seus conhecimentos na linguagem.</p>
                        </div>
                    </Col>
                    <Col id='link' md={6} className='bg-hover'>
                        <div className="card card-01">
                            <img src={link} className='fullscreen' alt="Card image" />
                        </div>
                        <div className="texto">
                            <p>"Construí um projeto de Linktree utilizando HTML e CSS para criar animações e estilizações personalizadas, permitindo centralizar diversos links em uma única página."</p>
                        </div>
                    </Col>
                </Row>
                <Row className='px-3'>
                    <Col md={6} className='bg-hover pb-5'>
                        <div className="card card-01">
                            <img src={nlw} className='fullscreen' alt="Card image" />
                        </div>
                        <div className="texto">
                            <p>"Participei do NLW da Rocketseat e desenvolvi uma aplicação completa, com frontend, backend e versão mobile, utilizando as tecnologias mais modernas do mercado.</p>
                        </div>
                    </Col>
                    <Col md={6} className='bg-hover'>
                        <div className="card card-01">
                            <img src={pokemon} className='fullscreen' alt="Card image" />
                        </div>
                        <div className="texto">
                            <p>Criei uma Pokédex em React, utilizando a API do Pokémon para permitir aos usuários visualizar e buscar seus Pokémon favoritos.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}