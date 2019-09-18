import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="box-content-01 wow flipInY">
                                <div className="box-img"/>
                                <h2>Promoter 01 vagas</h2>
                                <p>Elbina has had several years of experience in teaching English language</p>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="box-content-01 wow flipInY">
                                <div className="box-img"/>
                                <h2>Atendente 06 vagas</h2>
                                <p>Elbina has had several years of experience in teaching English language</p>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="box-content-01 wow flipInY">
                                <div className="box-img"/>
                                <h2>Recepcionista 02 vagas</h2>
                                <p>Elbina has had several years of experience in teaching English language</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}