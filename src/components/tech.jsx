import '../css/tech.css';
import '@splidejs/react-splide/css'; import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import { Container, Row, Col } from "react-bootstrap";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function Tech() {
    return (
        <>
            <Container id="sobreId" />
            <Row className="p-5">
                <Col md={12}>
                    <article class=" pb-3 text-center">
                        <h1 className="title bg">Valores</h1>
                    </article>
                </Col>
                <Col id='sobre' md={6}>
                    <h4 className='bg'>Missão</h4>
                    <p>Ajudar a sociedade através da tecnologia, fazendo a diferença no mundo.</p>
                    <h4 className='bg'>Visão</h4>
                    <p>Alcançar meus objetivos pessoais e profissionais e se possível, ajudar os outros a alcançarem os seus próprios.</p>
                    <h4 className='bg'>Valores</h4>
                    <p>
                        Ser grato, saber reconhecer, felicidade é um exercício
                        Tudo o que acontece em MINHA VIDA é CULPA MINHA - sendo ruim ou bom - Assumir a responsabilidade, você está no controle.
                        Viver pelo exemplo - ser o líder e se empenhar, ralar juntamente com a equipe para a motivação de todos.
                    </p>
                    {/* <em className='bg'>
                        "O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai.
                        Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia.
                        Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar,
                        ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se
                        cansou de chorar e decidiu fazer alguma coisa a respeito!"
                    </em> */}
                </Col>
                <Col id='rocket' md={6} className='text-center'>
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
                <Col className="p-0 m-auto">
                    <article class="text-center py-3">
                        <h1 className="title bg">Tecnologias</h1>
                        <p>
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
            </Row>
            <Container />
        </>
    )
}