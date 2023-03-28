import { Container, Row, Col } from "react-bootstrap";
import '../css/tech.css';
import '@splidejs/react-splide/css'; import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

// import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
                    {/* <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Image 2" />
                        </SplideSlide>
                    </Splide> */}
                    <Splide hasTrack={false} aria-label="..." options={{
                        rewind: true,
                        autoStart: true,
                        // width: 800,
                        gap: '1rem',
                        autoScroll: {
                            speed: 2,
                        },
                    }}>
                        <div className="custom-wrapper text-center">
                            <SplideTrack>
                                <SplideSlide>
                                    <img width={300} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="javascript" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img width={300} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
                                </SplideSlide>

                            </SplideTrack>
                            <div className="splide__arrows" />
                        </div>
                    </Splide>

                    <div class="section-div text-center">
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
                    </div>
                </Col>
            </Row>
            <Container />
        </>
    )
}