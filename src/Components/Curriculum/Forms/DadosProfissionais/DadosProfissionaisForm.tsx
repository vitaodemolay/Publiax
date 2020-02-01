import React from "react";
import { DadosProfissionaisModel } from "../../../../Models/DadosProfissionaisModel";
import { Form, Container, Alert, FormGroup, Label, Input, Row, Col, Spinner, Button } from "reactstrap";
import moment from "moment";

interface Props {
    dadosProfissionais : DadosProfissionaisModel
}

export default class FormProfissionalData extends React.Component<Props> {

    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.dadosProfissionais.doFieldUpdate(fieldName, evt.target.value);
    }

    handleFieldIsActualUpdate = () => evt => {
        this.props.dadosProfissionais.doFieldUpdate("actual", (evt.target.value == 1));
    }

    setDate(value) {
        let _date = new Date(value);
        return moment(_date).format("YYYY-MM-DD");
    }

    render(){
        const { dadosProfissionais } = this.props;
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
                        <Input type="text" className="form-control" placeholder="Empresa" onChange={this.handleFieldUpdate('title')} value={dadosProfissionais.input['title']} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Resumo</Label>
                        <Input type="textarea" className="form-control" placeholder="Resumo" onChange={this.handleFieldUpdate('summary')} value={dadosProfissionais.input['summary']} />
                    </FormGroup>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <label>É posição atual</label>
                                <Input type="select" className="form-control" onChange={this.handleFieldIsActualUpdate()} value={dadosProfissionais.input['actual'] ? 1 : 0}>
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
                                <Input type="date" className="form-control" onChange={this.handleFieldUpdate('startIn')} value={this.setDate(dadosProfissionais.input['startIn'])} />
                            </FormGroup>
                        </Col>
                        {!dadosProfissionais.input['actual'] &&
                            <Col md={6}>
                                <FormGroup>
                                    <label>Saída</label>
                                    <Input type="date" className="form-control" onChange={this.handleFieldUpdate('endIn')} value={this.setDate(dadosProfissionais.input['endIn'])} />
                                </FormGroup>
                            </Col>
                        }
                    </Row>
                    {dadosProfissionais.isSaving() &&
                        <Spinner animation="border" variant="secondary" />
                    }
    
                    {!(dadosProfissionais.isSaving()) &&
                        <Row>
                            <Col md={2}>
                                <Button className="btn btn-primary" onClick={dadosProfissionais.updateDataSource}>SALVAR</Button>
                            </Col>
                            <Col md={2}>
                                <Button className="danger" onClick={dadosProfissionais.cancelEdition}>CANCELAR</Button>
                            </Col>
                        </Row>
                    }
                </Container>
            </Form>
        );
    }
}