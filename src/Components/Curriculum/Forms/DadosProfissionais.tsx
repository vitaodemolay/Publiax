import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { DadosProfissionaisModel } from '../../../Models/DadosProfissionaisModel';
import { appModels } from '../../../AppModels';
import { IPositionHeld } from '../../../Service/Interfaces/IPositionHeld';

class Props {
    @Inject dadosProfissionais: DadosProfissionaisModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class DadosProfissionaisComponent extends React.Component<Props> {
    loadFields() {
        const { dadosProfissionais } = this.props;
        dadosProfissionais.getPositionsDataOnSource();
    }

    componentDidMount() {
        this.loadFields();
    }

    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.dadosProfissionais.doFieldUpdate(fieldName, evt.target.value);
    }

    render() {
        const { dadosProfissionais } = this.props;
        return (
            <div>
                {dadosProfissionais.isLoading && <div>Carregando...</div>}
                {dadosProfissionais.isFailed && <div>Falhou!</div>}
                {dadosProfissionais.isCompleted &&
                    <div>
                        <HeaderForm />

                        {dadosProfissionais.isEditing() ? (
                            <FormProfissionalData dadosProfissionais={dadosProfissionais} />
                        ) :
                            (
                                <div>
                                    {/* <HistoryPosition dadosProfissionais={dadosProfissionais} /> */}

                                    <Row>
                                        <Button className="btn primary">Novo Historico</Button>
                                    </Row>
                                </div>
                            )}
                    </div>
                }
            </div>
        );
    }
}

function HeaderForm() {
    return (
        <div>
            <h2>Dados Profissionais</h2>
            <hr />
        </div>
    );
}

function HistoryPosition(props) {
    const { dadosProfissionais } = props;
    let result = (
        <div>
            Você ainda não Registrou nenhum historico profissional.
        </div>
    );

    let positions: IPositionHeld[] = dadosProfissionais.getHistoryPosition();
    if (positions !== null && positions.length > 0) {
        result = (
            <ListGroup>
                {positions.map((position) => (
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            <FormGroup>
                                <Label>Empresa</Label>
                                <span>{position.title}</span>
                            </FormGroup>
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            <FormGroup>
                                <Label>Descrição</Label>
                                <span>{position.summary}</span>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={4}>
                                        <Label>Posição Atual</Label>
                                        <span>{position.actual ? "Sim" : "Não"}</span>
                                    </Col>

                                    <Col md={4}>
                                        <Label>Inicio</Label>
                                        <span>{position.startIn}</span>
                                    </Col>

                                    <Col md={4}>
                                        <Label>Saída</Label>
                                        <span>{position.endIn}</span>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </ListGroupItemText>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }

    return result;
}

function FormProfissionalData(props) {
    const { dadosProfissionais } = props;
    return (
        <Form id="register-details" className="">
            <Container className="signup-content">
                <FormGroup>
                    <Label>Empresa</Label>
                    <Input type="text" className="form-control" placeholder="Empresa" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Resumo</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <label>É posição atual</label>
                            <Input type="select" name="select" id="exampleSelect2">
                                <option>Sim</option>
                                <option>Não</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <label>Inicio</label>
                            <Input type="text" name="city" id="exampleCity" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label>Saída</label>
                            <Input type="text" name="city" id="exampleCity" />
                        </FormGroup>
                    </Col>

                </Row>

                <Button className="btn btn-primary">SALVAR</Button>
            </Container>
        </Form>
    );
}