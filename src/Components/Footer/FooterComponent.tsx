import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className="footer-area">
                <div className="footer-widget">
                    <Container>
                        <Row>
                            <Col lg="4" md="3" sm="7">
                                <div className="site-logo">
                                    <a href="/" className="brand" />
                                </div>
                            </Col>

                            <Col lg="2" md="3" sm="6">
                                <div className="footer-link">
                                    <h6 className="footer-title">Serviços</h6>
                                    <ul>
                                        <li><a href="#">Vagas</a></li>
                                        <li><a href="#">Eventos</a></li>
                                        <li><a href="#">Feiras</a></li>
                                        <li><a href="#">Marketing</a></li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg="3" md="3" sm="6">
                                <div className="footer-link">
                                    <h6 className="footer-title">Sobre Nós</h6>
                                    <ul>
                                        <li><a href="#">Quem Somos</a></li>
                                        <li><a href="#">Clientes</a></li>
                                        <li><a href="#">Depoimentos</a></li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg="3" md="3" sm="6">
                                <div className="footer-link">
                                    <h6 className="footer-title">Endereço</h6>
                                    <ul>
                                        <li>Av.Gastão Vidigal, 1132-V. Leopoldina<br/>
                                        São Paulo-SP - 05314-010</li>
                                        <li><strong>Telefone</strong> 11 3641-9239/9095</li>
                                        <li><strong>Celular</strong> 11 986557890</li>
                                        <li><strong>E-mail</strong> contato@winnpromocoes.com.br</li>

                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        );
    }
}