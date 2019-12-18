import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

export default class DadosProfissionaisComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Dados Profissionais</h2>
                <hr />
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
                                <Input type="text" name="city" id="exampleCity"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <label>Saída</label>
                                <Input type="text" name="city" id="exampleCity"/>
                            </FormGroup>
                        </Col>

                    </Row>

                    <Button className="btn btn-primary">SALVAR</Button>
                </Container>
            </Form>
        );
    }
}