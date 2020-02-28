import React from "react";
import { LingEstrangeirasModel } from "../../../../Models/LingEstrangeirasModel";
import { Container, Form, FormGroup, Row, Col, Button, Label, Input, Alert, Spinner } from "reactstrap";

interface Props {
    lingEstrangeirasModel: LingEstrangeirasModel
}

export default class FormLingEstrangeiras extends React.Component<Props> {
    
    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.lingEstrangeirasModel.doFieldUpdate(fieldName, evt.target.value);
    }

    render() {
        const { lingEstrangeirasModel } = this.props;
        return (
            <Form id="register-details" className="">
                <Container className="signup-content">
                    <div>
                        {lingEstrangeirasModel.isError() &&
                            <Alert color="danger">
                                <span>{lingEstrangeirasModel.getErrorMessage()}</span>
                            </Alert>
                        }
                    </div>
                    <FormGroup>
                        <Label>Idioma</Label>
                        <Input type="text" className="form-control" placeholder="Idioma" onChange={this.handleFieldUpdate('description')} value={lingEstrangeirasModel.input['description']} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nível de Conhecimento</Label>
                        <Input type="select" className="form-control" placeholder="Nível" onChange={this.handleFieldUpdate('level')} value={lingEstrangeirasModel.input['level']}>
                            <option value={1}>Básico</option>
                            <option value={2}>Intermediário</option>
                            <option value={3}>Avançado</option>
                        </Input>
                    </FormGroup>

                    {lingEstrangeirasModel.isSaving() &&
                        <Spinner animation="border" variant="secondary" />
                    }
    
                    {!(lingEstrangeirasModel.isSaving()) &&
                        <Row>
                            <Col md={2}>
                                <Button className="btn btn-primary" onClick={lingEstrangeirasModel.updateDataSource}>SALVAR</Button>
                            </Col>
                            <Col md={2}>
                                <Button className="danger" onClick={lingEstrangeirasModel.cancelEdition}>CANCELAR</Button>
                            </Col>
                        </Row>
                    }
                </Container>
            </Form>
        )
    }
}