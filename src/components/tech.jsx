import { Container, Row, Col } from "react-bootstrap";
import '../css/tech.css';
import '@splidejs/react-splide/css'; import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function Tech() {
    return (
        <>
            <Container />
            <Row className="p-5">
                <Col className="p-0 m-auto">
                    <article class="text-center">
                        <h1 className="title">Tecnologias</h1>
                        <p class="text-white">
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
                            </SplideTrack>
                        </Splide>
                    </div>
                    {/* <div class="section-div text-center">
                        <div>
                            <ul class="channel-list">
                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            alt="react" />
                                    </a>
                                </li>

                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                                            alt="javascript" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                            alt="typescript" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                            alt="php" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                                            alt="devicons" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                                            alt="html" />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="#">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                            alt="python" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </Col>
            </Row>
            <Container />
        </>
    )
}