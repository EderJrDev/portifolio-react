import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from "react-bootstrap";

export function Progress() {
    return (
        <>
            <Row>
                <Col>
                    <Carousel variant="dark" className='text-center'>
                        <Carousel.Item className='text-center jusfify-content-center'>
                            <img
                                className="d-block mx-auto" 
                                src="https://img.freepik.com/vetores-gratis/gestao-de-pessoal-definicao-de-perspectiva-orientacao-de-objetivos-organizacao-do-trabalho-em-equipe-coach-de-negocios-executivos-de-empresas-e-personagens-de-desenhos-animados_335657-2967.jpg?w=826&t=st=1680149381~exp=1680149981~hmac=62a4cbad1c3e6002299914dec0e1f539b9350112451217bd8835eb61fbf7a60b"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p className='text-black'>  Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block mx-auto" 
                                src="https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-abstrato-de-cultura-no-local-de-trabalho-valores-compartilhados-sistemas-de-crencas-atitude-no-trabalho-equipe-da-empresa-cultura-corporativa-alto-desempenho-metafora-abstrata-de-saude-do-funcionario_335657-1930.jpg?w=826&t=st=1680172396~exp=1680172996~hmac=34bd74e9dfbcf6449c32b4f1560963eb371151338227f34bfe8d874004dc2a6c"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block mx-auto"
                                src="https://img.freepik.com/vetores-gratis/conceito-abstrato-de-inicializacao_335657-3029.jpg?w=826&t=st=1680169277~exp=1680169877~hmac=99691277d9838d5bdad61e60e27628400df69044c9c5c2c495d2eeb34a0c87c3"
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