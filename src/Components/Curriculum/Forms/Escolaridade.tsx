import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class EscolaridadeComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Escolaridade</h2>
                <hr />
                <Container className="signup-content">


                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" placeholder="Título" />
                    </div>
                    <div className="form-group">
                        <label>Instituição</label>
                        <input type="text" className="form-control" placeholder="Instituição" />
                    </div>
                    <div className="form-group">
                        <label>Graduação</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Ano</label>
                            <select id="inputState" className="form-control">
                                <option>Escolha...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-8">
                            <label>Estado</label>
                            <select id="inputState" className="form-control">
                                <option>Escolha...</option>
                                <option>...</option>
                            </select>
                        </div>

                    </div>

                    <Button className="btn btn-primary">SALVAR</Button>
                </Container>
            </Form>
        );
    }
}