import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';

export default class EscolaridadeComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Escolaridade</h2>
                <hr />
                <Container className="signup-content">


                    <FormGroup>
                        <label>Título</label>
                        <input type="text" className="form-control" placeholder="Título" />
                    </FormGroup>
                    <FormGroup>
                        <label>Instituição</label>
                        <input type="text" className="form-control" placeholder="Instituição" />
                    </FormGroup>
                    <FormGroup>
                        <label>Graduação</label>
                        <input type="text" className="form-control" />
                    </FormGroup>


                    <Row form>
                        <Col md={4} xs={12}>
                            <FormGroup>
                                <label>Ano</label>
                                <select id="inputState" className="form-control">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col md={8} xs={12}>
                            <FormGroup>
                                <label>Ano</label>
                                <select id="inputState" className="form-control">
                                    <option>Escolha...</option>
                                    <option>...</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button className="btn btn-primary">SALVAR</Button>
                </Container>
            </Form>
        );
    }
}