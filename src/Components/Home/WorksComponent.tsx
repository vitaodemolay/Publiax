import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCamera, faLaptop } from '@fortawesome/free-solid-svg-icons';

export default class Works extends React.Component {
    render(){
        return(
            <section id="works">
                <Container className="marginbot-50">
                    <Row>
                        <Col lg={{size:8, offset:2}}>
                            <div>
                                <div className="section-heading text-center">
                                    <h2 className="h-bold">Como Funciona</h2>
                                    <div className="divider-header"/>
                                    <p>Veja as vantagens de fazer parte desse time</p> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col md="4">
                            <div className="box-content">
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faCogs} size="5x" />   
                                </div>
                                <h2>Cadastro</h2>
                                <p>Elbina has had several years of experience in teaching English language and the IELTS examination. He studied at the Academy of Public Administration and Azerbaijan State University of Economics.</p>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="box-content">
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faCamera} size="5x" />
                                </div>
                                <h2>Vagas</h2>
                                <p>Elbina has had several years of experience in teaching English language and the IELTS examination. He studied at the Academy of Public Administration and Azerbaijan State University of Economics.</p>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="box-content">
                                <div className="service-icon">
                                    <FontAwesomeIcon icon={faLaptop} size="5x" />
                                </div>
                                <h2>Pagamento</h2>
                                <p>Elbina has had several years of experience in teaching English language and the IELTS examination. He studied at the Academy of Public Administration and Azerbaijan State University of Economics.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}