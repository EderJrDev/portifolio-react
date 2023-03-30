import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from "react-bootstrap";

export function Progress() {
    return (
        <>
            <Row>
                <Col>
                    <Carousel variant="dark">
                        <Carousel.Item className='text-center'>
                            <img
                                className="d-block text-center"
                                src="https://img.freepik.com/vetores-gratis/gestao-de-pessoal-definicao-de-perspectiva-orientacao-de-objetivos-organizacao-do-trabalho-em-equipe-coach-de-negocios-executivos-de-empresas-e-personagens-de-desenhos-animados_335657-2967.jpg?w=826&t=st=1680149381~exp=1680149981~hmac=62a4cbad1c3e6002299914dec0e1f539b9350112451217bd8835eb61fbf7a60b"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=eee"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
};