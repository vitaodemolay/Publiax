import React from 'react';
import { Container, Row, Col, Button, Spinner, Label } from 'reactstrap';
import { VagaDetalheModel } from '../../Models/VagaDetalheModel';

interface Props {
    vagaDetalhe: VagaDetalheModel
    jobId: string
}

export default class CandidatarFooterComponent extends React.Component<Props> {

    voltarClick = () => {
        window.location.href = '#/vagas';
    }

    confirmaClick = () => {
        const { vagaDetalhe, jobId } = this.props;
        vagaDetalhe.registerSubscription(jobId);
    }

    render() {
        const { vagaDetalhe, jobId } = this.props;
        const subscript = vagaDetalhe.isSubscript(jobId);
        return (
            <Container>
                <Row className="VagaDetalhesFooter">
                    <Col>
                        <Button onClick={this.voltarClick}>Voltar</Button>
                    </Col>

                    {vagaDetalhe.isSaving() &&
                        <Spinner animation="border" variant="secondary" />
                    }
                    {!vagaDetalhe.isSaving() && (
                        <div>
                            {subscript.isSubscribe ? (
                                <Col>
                                    <Label>Inscrito na vaga em {subscript.subscriptionDate}</Label>
                                </Col>
                            ) : (
                                    <Col>
                                        <Button onClick={this.confirmaClick}>Confirma Candidatura</Button>
                                    </Col>
                                )}
                        </div>
                    )}
                </Row>
            </Container>
        );
    }
}