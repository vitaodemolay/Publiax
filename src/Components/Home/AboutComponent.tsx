import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const imgWinn1 = require('../../img/img01.jpg');
const imgWinn2 = require('../../img/img02.jpg');
const imgWinn3 = require('../../img/img03.jpg');

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col md="4">
                        <div className="box-content-01 wow flipInY" data-wow-offset="0" data-wow-delay="0.8s">
                                <div className="box-img">
                                    <img src={imgWinn1} className="img-responsive" />
                                </div>
                                <div className="box-text">
                                    <h2>Promoter 01 vagas</h2>
                                    <p>Elbina has had several years of experience in teaching English language</p> 
                                </div>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="box-content-01 wow flipInY" data-wow-offset="0" data-wow-delay="0.8s">
                                <div className="box-img">
                                    <img src={imgWinn2} className="img-responsive" />
                                </div>
                                <div className="box-text">
                                    <h2>Promoter 01 vagas</h2>
                                    <p>Elbina has had several years of experience in teaching English language</p> 
                                </div>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="box-content-01 wow flipInY" data-wow-offset="0" data-wow-delay="0.8s">
                                <div className="box-img">
                                    <img src={imgWinn3} className="img-responsive" />
                                </div>
                                <div className="box-text">
                                    <h2>Promoter 01 vagas</h2>
                                    <p>Elbina has had several years of experience in teaching English language</p> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}