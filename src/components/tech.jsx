import '../css/tech.css';
import '@splidejs/react-splide/css'; import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function Tech() {
    return (
        <>
            <Container />
            <Row className="p-5">
                <Col className="p-0 m-auto">
                    <article class="text-center">
                        <h1 className="title bg">Tecnologias</h1>
                        <p class="">
                            Tecnologias que já tive contato, utilizei em projetos e estudos.
                        </p>
                    </article>
                    <div>
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
                                    <img className="img-tech" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
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
                <Col className="text-center">
                    <article class=" pb-3 text-center">
                        <h1 className="title bg">Valores</h1>
                    </article>
                    <p className="">Missão: Fazer a diferença no mundo ao meu redor, ajudar a sociedade através da tecnologia.

                    </p>
                    <p className="">  Visão: Minha visão é alcançar meus objetivos pessoais e profissionais, enquanto ajudo os outros a alcançarem os seus.
                    </p>
                    <p className="">Valores: felicidade é um exercício, saber reconhecer , ser grato
                        Tudo o que acontece na MINHA vida é MINHA CULPA, seja bom ou ruim  - Assumir responsabilidade sobre nossa vida , você está no controle. Viver pelo exemplo - Ser o líder e se esforçar , para que o time se sinta motivado; Ralar junto com com o time.

                    </p>
                </Col>
            </Row>
            <Container />
        </>
    )
}