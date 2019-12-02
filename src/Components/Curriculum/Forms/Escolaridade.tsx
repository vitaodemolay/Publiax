import React from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';

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
                    
                    <div className="form-group">
                        <label>Nome Social</label>
                        <input type="text" className="form-control" placeholder="Nome Social" />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input type="text" className="form-control" placeholder="CPF" />
                    </div>
                    <div className="form-group">
                        <label>RG</label>
                        <input type="password" className="form-control" placeholder="RG" />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Estado Emissor RG</label>
                            <select id="inputState" className="form-control">
                                <option>Escolha...</option>
                                <option>...</option>
                            </select >
                        </div>
                        <div className="form-group col-md-4">
                            <label>Orgão Emissor</label>
                            <select id="inputState" className="form-control" >
                                <option>Escolha...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Data Nascimento</label>
                            <select id="inputState" className="form-control" >
                                <option>Escolha...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Selecione seu Sexo</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Estado Civil</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
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

                    </div>

                    <button className="btn btn-primary">SALVAR</button>
                </Container>
            </Form>
        )
    }
}