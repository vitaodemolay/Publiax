import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { IVaga } from '../../Service/Interfaces/IVaga';


class Props {
    vaga: IVaga;
    estaInscrito: boolean;
}

export default class FooterComponent extends React.Component<Props> {

    voltarClick = () => {
        window.location.href = '#/vagas';
    }

    candidatarClick = () => {
        const { vaga } = this.props;
        window.location.href = `#/candidatarvaga/${vaga.id}`;
    }

    render() {
        const { estaInscrito } = this.props;

        return (
            <Container>
                <Row className="VagaDetalhesFooter">
                    <Col>
                        <Button onClick={this.voltarClick}>Voltar</Button>
                    </Col>
                    {!estaInscrito && (
                        <Col>
                            <Button onClick={this.candidatarClick}>Candidatar</Button>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}