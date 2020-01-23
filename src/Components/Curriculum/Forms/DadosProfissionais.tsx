import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Alert } from 'reactstrap';
import { DadosProfissionaisModel } from '../../../Models/DadosProfissionaisModel';
import { appModels } from '../../../AppModels';
import { IPositionHeld } from '../../../Service/Interfaces/IPositionHeld';
import moment from 'moment';

class Props {
    @Inject dadosProfissionais: DadosProfissionaisModel;
}

class ProfessionalDataTools {
   dadosProfissionais: any = null;
    /**
     *
     */
    constructor(professionalData: any) {
        this.dadosProfissionais = professionalData;
    }

    public  handleFieldUpdate = (fieldName: string) => evt => {
        this.dadosProfissionais.doFieldUpdate(fieldName, evt.target.value);
    }

    public  handleFieldIsActualUpdate = () => evt => {
        this.dadosProfissionais.doFieldUpdate("actual", (evt.target.value == 1));
    }

    public  setDate(value) {
        let _date = new Date(value);
        return moment(_date).format("YYYY-MM-DD");
    }
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

    render() {
        const { dadosProfissionais } = this.props;
        const toolBox = new ProfessionalDataTools(dadosProfissionais);
        return (
            <div>
                {dadosProfissionais.isLoading && <div>Carregando...</div>}
                {dadosProfissionais.isFailed && <div>Falhou!</div>}
                {dadosProfissionais.isCompleted &&
                    <div>
                        <HeaderForm />

                        {dadosProfissionais.isEditing() ? (
                            <FormProfissionalData dadosProfissionais={dadosProfissionais} toolBox={toolBox} />
                        ) :
                            (
                                <div>
                                    <HistoryPosition dadosProfissionais={dadosProfissionais} />

                                    <Row>
                                        <Button onClick={dadosProfissionais.preperNewPosition} className="btn primary">Novo Historico</Button>
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
    const { dadosProfissionais, toolBox } = props;
    return (
        <Form id="register-details" className="">
            <Container className="signup-content">
                <div>
                    {dadosProfissionais.isError() &&
                        <Alert color="danger">
                            <span>{dadosProfissionais.getErrorMessage()}</span>
                        </Alert>
                    }
                </div>
                <FormGroup>
                    <Label>Empresa</Label>
                    <Input type="text" className="form-control" placeholder="Empresa" onChange={toolBox.handleFieldUpdate('title')} value={dadosProfissionais.input['title']} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Resumo</Label>
                    <Input type="textarea" className="form-control" placeholder="Resumo" onChange={toolBox.handleFieldUpdate('summary')} value={dadosProfissionais.input['summary']} />
                </FormGroup>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <label>É posição atual</label>
                            <Input type="select" className="form-control" onChange={toolBox.handleFieldIsActualUpdate()} value={dadosProfissionais.input['actual'] ? 1 : 0}>
                                <option value={1}>Sim</option>
                                <option value={0}>Não</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <label>Inicio</label>
                            <Input type="date" className="form-control" onChange={toolBox.handleFieldUpdate('startIn')} value={toolBox.setDate(dadosProfissionais.input['startIn'])} />
                        </FormGroup>
                    </Col>
                    {dadosProfissionais.input['actual'] &&
                        <Col md={6}>
                            <FormGroup>
                                <label>Saída</label>
                                <Input type="date" className="form-control" onChange={toolBox.handleFieldUpdate('endIn')} value={toolBox.setDate(dadosProfissionais.input['endIn'])} />
                            </FormGroup>
                        </Col>
                    }
                </Row>

                <Row>
                    <Col md={2}>
                        <Button className="btn btn-primary">SALVAR</Button>
                    </Col>
                    <Col md={2}>
                        <Button className="danger" onClick={dadosProfissionais.cancelEdition}>CANCELAR</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}