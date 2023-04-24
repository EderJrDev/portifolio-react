import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '../css/tech.css';
import '@splidejs/react-splide/css'; import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


export function Tech() {
    return (
        <>
            <Container id="sobreId" />
            <Row>
                <Col className="p-5" md={12}>
                    <article class=" pb-3 text-center">
                        <h1 className="title bg">Valores</h1>
                    </article>
                </Col>
                <Col id='sobre' className="p-5" md={6}>
                    <h4 className='bg'>Missão</h4>
                    <p>Minha missão é mostrar para as pessoas o incrível potencial da tecnologia e como ela pode melhorar todos os aspectos da vida,
                        desde a comunicação até a resolução de problemas complexos.</p>
                    <h4 className='bg'>Visão</h4>
                    <p>Meus objetivos pessoais e profissionais são alcançar excelência no meu ramo de atuação, ser valorizado e reconhecido por minhas habilidades,
                        e compartilhar meu conhecimento de forma interativa e abrangente com outras pessoas.</p>
                    <h4 className='bg'>Valores</h4>
                    <p>
                        A felicidade é um exercício, ser grato e saber reconhecer. Tudo o que acontecer em minha vida é de minha responsabilidade seja negativamente ou positivamente.
                        Assumir o dever, você está no comando.
                        Ser o líder, estar com a equipe, dando o exemplo e sendo a motivação necessária à todos.
                    </p>
                </Col>
                <Col id='rocket' md={6} className='text-center p-5'>
                    <div className="rocket">
                        <div className="rocket-body">
                            <div className="body"></div>
                            <div className="fin fin-left"></div>
                            <div className="fin fin-right"></div>
                            <div className="window"></div>
                        </div>
                        <div className="exhaust-flame"></div>
                        <ul className="exhaust-fumes">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className="star">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </Col>
                <Col className="">
                    <article class="text-center py-3">
                        <h1 className="title bg">Tecnologias</h1>
                        <p>
                            Tecnologias estudadas e utlizadas em projetos.
                        </p>
                    </article>
                    <div className="techs">
                        <Splide hasTrack={false} aria-label="..." options={{
                            type: "loop",
                            gap: "10px",
                            drag: "free",
                            arrows: false,
                            pagination: false,
                            perPage: 3,
                            autoScroll: {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind: false,
                                speed: 1
                            }
                        }}
                            extensions={{ AutoScroll }}
                        >
                            <SplideTrack>
                                <SplideSlide>
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="javascript" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" />
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                </Col>
            </Row>
            <Container />
        </>
    )
}