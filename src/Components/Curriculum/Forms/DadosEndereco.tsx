import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

export default class DadosEnderecoComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Endereços</h2>
                <hr />
                <Container className="signup-content">

                    <FormGroup>
                        <label>Endereço</label>
                        <input type="email" className="form-control" placeholder="Endereço" />
                    </FormGroup>
                    <FormGroup>
                        <label>CEP</label>
                        <input type="email" className="form-control" placeholder="CEP" />
                    </FormGroup>

                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <label>Numero</label>
                                <input type="text" className="form-control" />
                            </FormGroup>
                        </Col>
                        <Col md={8}>
                            <FormGroup>
                                <label>Complemento</label>
                                <input type="text" className="form-control" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <label>Bairro</label>
                        <input type="email" className="form-control" />
                    </FormGroup>

                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <label>Cidade</label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={8}>
                            <FormGroup>
                            <label>Estado</label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Escolha...</option>
                                <option>...</option>
                            </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button className="btn btn-primary">SALVAR</Button>
                </Container>
            </Form>
        );
    }
}

