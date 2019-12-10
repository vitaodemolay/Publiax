import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class AvisosComponent extends React.Component {
    render() {
        return (
            <Form id="register-details" className=""> 
                <h2>Configuracoes</h2>
                <hr />
                <Container className="signup-content">

                    <FormGroup>
                        <Label>Nome Completo</Label>
                        <Input type="text" className="form-control" placeholder="Nome Completo" />
                    </FormGroup>
                    
                    {/* 
                    <h2>Endereços</h2>
                    <hr />
                    <div className="form-group">
                        <label>Endereço</label>
                        <input type="email" className="form-control" placeholder="Endereço" />
                    </div>
                    <div className="form-group">
                        <label>CEP</label>
                        <input type="email" className="form-control" placeholder="CEP" />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Numero</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-8">
                            <label>Complemento</label>
                            <input type="text" className="form-control" />

                        </div>

                    </div>
                    <div className="form-group">
                        <label>Bairro</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Cidade</label>
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

                    </div> */}

                    <Button className="btn btn-primary">SALVAR</Button>
                </Container>
            </Form>
        );
    }
}