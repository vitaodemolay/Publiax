import React from "react";
import { OutrasQualificacoesModel } from "../../../../Models/OutrasQualificacoesModel";
import { Container, Form, FormGroup, Row, Col, Button, Label, Input, Alert, Spinner } from "reactstrap";

interface Props {
    outrasQualificacoesModel: OutrasQualificacoesModel
}

export default class FormOutrasQualificacoes extends React.Component<Props> {
    
    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.outrasQualificacoesModel.doFieldUpdate(fieldName, evt.target.value);
    }

    render() {
        const { outrasQualificacoesModel } = this.props;
        return (
            <Form id="register-details" className="">
                <Container className="signup-content">
                    <div>
                        {outrasQualificacoesModel.isError() &&
                            <Alert color="danger">
                                <span>{outrasQualificacoesModel.getErrorMessage()}</span>
                            </Alert>
                        }
                    </div>
                    <FormGroup>
                        <Label>Qualificação</Label>
                        <Input type="text" className="form-control" placeholder="Título" onChange={this.handleFieldUpdate('description')} value={outrasQualificacoesModel.input['description']} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nível de Conhecimento</Label>
                        <Input type="select" className="form-control" placeholder="Graduação" onChange={this.handleFieldUpdate('level')} value={outrasQualificacoesModel.input['level']}>
                            <option value={1}>Básico</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                        </Input>
                    </FormGroup>

                    {outrasQualificacoesModel.isSaving() &&
                        <Spinner animation="border" variant="secondary" />
                    }
    
                    {!(outrasQualificacoesModel.isSaving()) &&
                        <Row>
                            <Col md={2}>
                                <Button className="btn btn-primary" onClick={outrasQualificacoesModel.updateDataSource}>SALVAR</Button>
                            </Col>
                            <Col md={2}>
                                <Button className="danger" onClick={outrasQualificacoesModel.cancelEdition}>CANCELAR</Button>
                            </Col>
                        </Row>
                    }
                </Container>
            </Form>
        )
    }
}