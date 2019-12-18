import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class CartaApresentacaoComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Carta Apresentação</h2>
                <hr />
                <Container className="signup-content">

                    <FormGroup>
                        <Label for="exampleText">Digite sua carta de apresentação</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Container>
            </Form>
        );
    }
}