import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';

export default class LinguaEstrangeiraComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Linguas Estrangeiras</h2>
                <hr />
                <Container className="signup-content">

                    <FormGroup>
                        <Label for="exampleText">LÍngua</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <label>Nivel</label>
                                <Input type="select" name="select" id="exampleSelect2">
                                    <option>Basico</option>
                                    <option>Intermediario</option>
                                    <option>Avançado</option>

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