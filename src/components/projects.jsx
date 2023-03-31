import { Col, Row, Card, Container } from "react-bootstrap";
import '../css/projects.css';

export function Projects() {
    return (
        <>
            {/* <Row> */}
            <Container className="body">
                <div className="pt-3">
                    <article class="text-center">
                        <h1 className="title">Projetos</h1>
                        <p class="text-white">
                            Projetos realizados durante os meus estudos.
                        </p>
                    </article>
                </div>
                <Row className="py-5">
                    <Col className="d-flex text-center">
                        <Card className="card">
                            <Card.Img variant="top" src="https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className="text-black">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/63b580374a87081d713a72f6_OG-NLW-SETUP.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className="text-black">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src="https://marcas-logos.net/wp-content/uploads/2020/02/Pokemon-logo.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className="text-black">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--jua8OqH9--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/99btm4uhb8qn1qcegdtq.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className="text-black">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* </Row> */}
        </>
    )
}