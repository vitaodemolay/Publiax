import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { DadosEnderecoModel } from '../../../Models/DadosEnderecoModel';
import { appModels } from '../../../AppModels';

class Props {
    @Inject dadosEndereco: DadosEnderecoModel;
}
@Connection({
    modelStore: appModels,
    props: Props
})

export default class DadosEnderecoComponent extends React.Component<Props> {

    componentDidMount() {
        this.loadFields();
    }

    loadFields() {
        const { dadosEndereco } = this.props;
        dadosEndereco.getAddressDataOnSource();
    }

    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.dadosEndereco.doFieldUpdate(fieldName, evt.target.value);
    }

    render() {
        const { dadosEndereco } = this.props;
        return (
            <div>
                {dadosEndereco.isLoading && <div>Carregando...</div>}
                {dadosEndereco.isFailed && <div>Falhou!</div>}
                {dadosEndereco.isCompleted &&
                    <Form id="register-details" className="">
                        <h2>Endereço</h2>
                        <hr />
                        <Container className="signup-content">

                            <FormGroup>
                                <Label>Endereço</Label>
                                <Input type="text" className="form-control" placeholder="Endereço" onChange={this.handleFieldUpdate('street')} value={dadosEndereco.input['street']} />
                            </FormGroup>
                           
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>Numero</Label>
                                        <Input type="text" className="form-control" placeholder="Numero" onChange={this.handleFieldUpdate('number')} value={dadosEndereco.input['number']}/>
                                    </FormGroup>
                                </Col>
                                <Col md={8}>
                                    <FormGroup>
                                        <Label>Complemento</Label>
                                        <Input type="text" className="form-control" placeholder="Complemento" onChange={this.handleFieldUpdate('complement')} value={dadosEndereco.input['complement']}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label>Bairro</Label>
                                <Input type="text" className="form-control" placeholder="Bairro" onChange={this.handleFieldUpdate('neighborhood')} value={dadosEndereco.input['neighborhood']}/>
                            </FormGroup>

                            <Row form>
                                <Col md={8}>
                                    <FormGroup>
                                        <Label>Cidade</Label>
                                        <Input type="text" className="form-control" placeholder="Cidade" onChange={this.handleFieldUpdate('city')} value={dadosEndereco.input['city']} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label>Estado</Label>
                                        <Input type="text" className="form-control" placeholder="Estado" onChange={this.handleFieldUpdate('state')} value={dadosEndereco.input['state']} />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label>CEP</Label>
                                <Input type="text" className="form-control" placeholder="CEP" onChange={this.handleFieldUpdate('zipCode')} value={dadosEndereco.input['zipCode']} />
                            </FormGroup>

                            <Button className="btn btn-primary">SALVAR</Button>
                        </Container>
                    </Form>
                }
            </div>

        );
    }
}

