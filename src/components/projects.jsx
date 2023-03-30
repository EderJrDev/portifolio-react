import { Col, Row } from "react-bootstrap";
import '../css/projects.css';

export function Projects() {
    return (
        <>
            {/* <Row> */}
                <Row className="body">
                    <div className="pt-3">
                        <article class="text-center">
                            <h1 className="title">Projetos</h1>
                            <p class="text-white">
                                Projetos realizados durante os meus estudos.
                            </p>
                        </article>
                    </div>
                    <Col className=" p-5 d-flex text-center">
                        <article className="card card--1">
                            <div className="card__img"></div>
                            <a href="#" className="card_link">
                                <div className="card__img--hover"></div>
                            </a>
                            <div className="card__info">
                                <span className="card__category">Quiz</span>
                                <h3 className="card__title">Quiz javaScript</h3>
                                {/* <span className="card__by">by <a href="#" className="card__author" title="author">Celeste Mills</a></span> */}
                            </div>
                        </article>
                        <article className="card card--2">
                            <div className="card__img"></div>
                            <a href="#" className="card_link">
                                <div className="card__img--hover"></div>
                            </a>
                            <div className="card__info">
                                <span className="card__category">Rocketseat</span>
                                <h3 className="card__title">Nlw Setup</h3>
                                {/* <span className="card__by">by <a href="#" class="card__author" title="author">John Doe</a></span> */}
                            </div>
                        </article>
                        <article className="card card--3">
                            <div className="card__img"></div>
                            <a href="#" className="card_link">
                                <div className="card__img--hover"></div>
                            </a>
                            <div className="card__info">
                                <span className="card__category"> Pokemon</span>
                                <h3 className="card__title">Pokedex</h3>
                                {/* <span className="card__by">by <a href="#" class="card__author" title="author">John Doe</a></span> */}
                            </div>
                        </article>
                        <article className="card card--4">
                            <div className="card__img"></div>
                            <a href="#" className="card_link">
                                <div className="card__img--hover"></div>
                            </a>
                            <div className="card__info">
                                <span className="card__category"> Progresso</span>
                                <h3 className="card__title">Linktree </h3>
                                {/* <span className="card__by">by <a href="#" class="card__author" title="author">John Doe</a></span> */}
                            </div>
                        </article>

                    </Col>
                </Row>
            {/* </Row> */}
        </>
    )
}