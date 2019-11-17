import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


export default class CandidatarFooterComponent extends React.Component {

    voltarClick = () => {
        window.location.href = '#/vagas';
    }

    confirmaClick = () => {

    }

    render() {
        return (
            <Container>
                <Row className="VagaDetalhesFooter">
                    <Col>
                        <Button onClick={this.voltarClick}>Voltar</Button>
                    </Col>

                    <Col>
                        <Button onClick={this.confirmaClick}>Confirma Candidatura</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}