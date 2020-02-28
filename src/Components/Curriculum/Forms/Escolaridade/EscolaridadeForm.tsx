import React from "react";
import { EscolaridadeModel } from "../../../../Models/EscolaridadeModel";
import { Container, Form, FormGroup, Row, Col, Button, Label, Input, Alert, Spinner } from "reactstrap";



interface Props {
    escolaridadeModel: EscolaridadeModel
}

export default class FormEducational extends React.Component<Props> {
    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.escolaridadeModel.doFieldUpdate(fieldName, evt.target.value);
    }

    handleFieldIsCompletedUpdate = () => evt => {
        this.props.escolaridadeModel.doFieldUpdate("completed", (evt.target.value == 1));
        if (!this.props.escolaridadeModel.input.completed) {
            this.props.escolaridadeModel.doFieldUpdate("year", null);
        }
    }

    render() {
        const { escolaridadeModel } = this.props;
        return (
            <Form id="register-details" className="">
                <Container className="signup-content">
                    <div>
                        {escolaridadeModel.isError() &&
                            <Alert color="danger">
                                <span>{escolaridadeModel.getErrorMessage()}</span>
                            </Alert>
                        }
                    </div>
                    <FormGroup>
                        <Label>Título</Label>
                        <Input type="text" className="form-control" placeholder="Título" onChange={this.handleFieldUpdate('title')} value={escolaridadeModel.input['title']} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Instituição</Label>
                        <Input type="text" className="form-control" placeholder="Instituição" onChange={this.handleFieldUpdate('institution')} value={escolaridadeModel.input['institution']} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Graduação</Label>
                        <Input type="select" className="form-control" placeholder="Graduação" onChange={this.handleFieldUpdate('degree')} value={escolaridadeModel.input['degree']}>
                            <option value={1}>Ensino Fundamental</option>
                            <option value={2}>Ensino Médio</option>
                            <option value={5}>Ensino Técnico</option>
                            <option value={3}>Ensino Superior</option>
                            <option value={4}>Pós Graduação</option>
                        </Input>
                    </FormGroup>


                    <Row form>
                        <Col md={4} xs={12}>
                            <FormGroup>
                                <Label>Está Concluido</Label>
                                <Input type="select" className="form-control" placeholder="Concluido?" onChange={this.handleFieldIsCompletedUpdate()} value={escolaridadeModel.input['completed'] ? 1 : 0}>
                                    <option value={1}>Sim</option>
                                    <option value={0}>Não</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        {escolaridadeModel.input['completed'] &&
                            <Col md={4} xs={12}>
                                <FormGroup>
                                    <Label>Ano</Label>
                                    <Input type="number" min={1940} max={3000} className="form-control" onChange={this.handleFieldUpdate('year')} value={escolaridadeModel.input['year']} />
                                </FormGroup>
                            </Col>
                        }
                    </Row>

                    {escolaridadeModel.isSaving() &&
                        <Spinner animation="border" variant="secondary" />
                    }
    
                    {!(escolaridadeModel.isSaving()) &&
                        <Row>
                            <Col md={2}>
                                <Button className="btn btn-primary" onClick={escolaridadeModel.updateDataSource}>SALVAR</Button>
                            </Col>
                            <Col md={2}>
                                <Button className="danger" onClick={escolaridadeModel.cancelEdition}>CANCELAR</Button>
                            </Col>
                        </Row>
                    }
                </Container>
            </Form>
        )
    }
}






