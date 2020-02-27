import React from 'react';
import { Container, Row, Col, Button, Spinner, Label } from 'reactstrap';
import { VagaDetalheModel } from '../../Models/VagaDetalheModel';
import { InscricaoVagaModel } from '../../Models/InscricaoVagaModel';

interface Props {
    vagaDetalhe: VagaDetalheModel,
    inscricaoVaga: InscricaoVagaModel
}

export default class CandidatarFooterComponent extends React.Component<Props> {

    voltarClick = () => {
        window.location.href = '#/vagas';
    }

    confirmaClick = () => {
        const { inscricaoVaga } = this.props;
        inscricaoVaga.registerSubscription();
    }

    render() {
        const { vagaDetalhe, inscricaoVaga } = this.props;
        const subscript = inscricaoVaga.getJobSubscription();
        return (
            <Container>
                <Row className="VagaDetalhesFooter">
                    <Col>
                        <Button onClick={this.voltarClick}>Voltar</Button>
                    </Col>

                    {inscricaoVaga.isSaving() &&
                        <Spinner animation="border" variant="secondary" />
                    }
                    {!inscricaoVaga.isSaving() && !subscript.isSubscribe && (
                        <Col>
                            <Button onClick={this.confirmaClick}>Confirma Candidatura</Button>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}