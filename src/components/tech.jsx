import { Container, Row, Col } from "react-bootstrap";
import '../css/tech.css';
import tech from '../assets/img/bg-1.jpg';

export function Tech() {
    return (
        <>
            <Container />
            <Row className="p-5">
                <Col className="p-0 m-auto">
                    <article class="text-center">
                        <h1 className="title">Tecnologias</h1>
                        <p class="text-white">
                            Tecnologias que já tive contato, utilizei em projetos e nos esturdos.
                        </p>
                    </article>
                    <div class="section-div text-center">
                        <div>
                            <ul class="channel-list">
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/laura-grassi/">
                                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/b00984ae-762b-44a0-b910-b5615992d39a-profile_image-150x150.png"
                                            alt="Imagem" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/company/filipe-deschamps/">
                                        <img src="https://media.licdn.com/dms/image/C4D0BAQHSLqrrC1FghQ/company-logo_200_200/0/1583195093895?e=1681344000&v=beta&t=84TcMX7xYc185qUFyeShbOGq6wAixC7cqi6qp90_Kcw"
                                            alt="Imagem" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Container />
        </>
    )
}