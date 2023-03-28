import { Container, Row, Col } from "react-bootstrap";
import '../css/menu.css';
import header from '../assets/img/header-img.svg';

export function Home() {
    return (
        <>
            <Container />
            <Row className="p-5">
                <Col className="p-0 m-auto">
                    <p className="title">Frontend Developer</p>
                    <p>
                        Desenvolvedor Frontend, Engenheiro de Software & App Developer
                    </p>
                </Col>
                <Col className="p-0">
                    <div className="banner">
                        <img src={header} />
                    </div>
                </Col>
            </Row>
            <Container />
        </>
    )
}