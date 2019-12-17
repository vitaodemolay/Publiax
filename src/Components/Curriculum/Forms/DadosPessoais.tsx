import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

export default class DadosPessoaisComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Dados Pessoais</h2>
                <hr />
                <Container className="signup-content">

                    <FormGroup>
                        <Label>Nome Completo</Label>
                        <Input type="text" className="form-control" placeholder="Nome Completo" />
                    </FormGroup>
                    <FormGroup>
                        <label>E-mail</label>
                        <input type="text" className="form-control" placeholder="E-mail" />
                    </FormGroup>
                    <FormGroup>
                        <label>CPF</label>
                        <input type="text" className="form-control" placeholder="CPF" />
                    </FormGroup>
                    <FormGroup>
                        <label>RG</label>
                        <input type="password" className="form-control" placeholder="RG" />
                    </FormGroup>

                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <label>Estado Emissor RG</label>
                                <Input type="select" name="select" id="exampleSelect1">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </Input >
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <label>Orgão Emissor</label>
                                <Input type="select" name="select" id="exampleSelect2">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <label>Data Nascimento</label>
                                <Input type="select" name="select" id="exampleSelect3">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </Input>
                            </FormGroup>  
                        </Col>
                    </Row>

                    <FormGroup>
                        <label>Selecione seu Sexo</label>
                        <Input type="select" name="select" id="exampleSelect4">
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Estado Civil</label>
                        <Input type="select" name="select" id="exampleSelect5">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </Container>
                <Button className="btn btn-primary">SALVAR</Button>
            </Form>
        );
    }
}