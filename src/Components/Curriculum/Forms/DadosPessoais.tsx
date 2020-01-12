import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { DadosPessoaisModel } from '../../../Models/DadosPessoaisModel';
import { appModels } from '../../../AppModels';
import { IUserData } from '../../../Service/Interfaces/IUserData';

class Props {
    @Inject dadosPessoais: DadosPessoaisModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})
export default class DadosPessoaisComponent extends React.Component<Props> {

    componentDidMount() {
        this.loadFields();
    }

    loadFields() {
        const { dadosPessoais } = this.props;
        dadosPessoais.getUserDataOnSource();
    }

    renderForm(userData: IUserData) {
        const { dadosPessoais } = this.props;
        dadosPessoais.setUserDataOnModel(userData);
        return "";
    }

    handleFieldUpdate = (fieldName: string) => evt => {
        this.props.dadosPessoais.doFieldUpdate(fieldName, evt.target.value);
    }

    setDate(value){
        return new Date(value);
    }

    render() {
        const { dadosPessoais } = this.props;
        return (
            <div>
                {dadosPessoais.isLoading && <div>Carregando...</div>}
                {dadosPessoais.isFailed && <div>Falhou!</div>}
                {dadosPessoais.isCompleted &&
                    <div>
                        <Form id="register-details" className="">
                            <h2>Dados Pessoais</h2>
                            <hr />
                            <Container className="signup-content">
                                <FormGroup>
                                    <Label>Nome Completo</Label>
                                    <Input type="text" onChange={this.handleFieldUpdate('name')} value={dadosPessoais.input['name']} className="form-control" placeholder="Nome Completo" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>E-mail</Label>
                                    <Input type="text" onChange={this.handleFieldUpdate('email')} value={dadosPessoais.input['email']} className="form-control" placeholder="E-mail" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Celular</Label>
                                    <Input type="text" onChange={this.handleFieldUpdate('celphone')} value={dadosPessoais.input['celphone']} className="form-control" placeholder="Celular" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>CPF</Label>
                                    <Input type="text" onChange={this.handleFieldUpdate('cgc')} value={dadosPessoais.input['cgc']} className="form-control" placeholder="CPF" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>RG</Label>
                                    <Input type="text" onChange={this.handleFieldUpdate('rg')} value={dadosPessoais.input['rg']} className="form-control" placeholder="RG" />
                                </FormGroup>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Orgão Emissor</Label>
                                            <Input type="text" onChange={this.handleFieldUpdate('issuer')} value={dadosPessoais.input['issuer']} className="form-control" placeholder="Orgão Emissor" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Data Nascimento</Label>
                                            <Input type="date" onChange={this.handleFieldUpdate('birthday')} value={this.setDate(dadosPessoais.input['birthday'])} className="form-control" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Sexo</Label>
                                            <Input type="select" onChange={this.handleFieldUpdate('gender')} value={dadosPessoais.input['gender']} className="form-control" placeholder="Sexo">
                                                <option value={1}>Masculino</option>
                                                <option value={2}>Feminino</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Estado Civil</Label>
                                            <Input type="select" onChange={this.handleFieldUpdate('maritalStatus')} value={dadosPessoais.input['maritalStatus']} className="form-control" placeholder="Estado Civil">
                                                <option value={1}>Solteiro</option>
                                                <option value={2}>Casado</option>
                                                <option value={3}>Separado</option>
                                                <option value={4}>Divorciado</option>
                                                <option value={5}>Viuvo</option>
                                                <option value={6}>União Estavel</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Deficiencia</Label>
                                            <Input type="select" onChange={this.handleFieldUpdate('physicalDisability')} value={dadosPessoais.input['physicalDisability']} className="form-control" placeholder="Deficiencia">
                                                <option value={0}>Nenhuma</option>
                                                <option value={1}>Visual</option>
                                                <option value={2}>Auditiva</option>
                                                <option value={3}>Fala</option>
                                                <option value={4}>Física</option>
                                                <option value={5}>Intelectual</option>
                                                <option value={6}>Multipla</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Descrição Deficiencia</Label>
                                            <Input type="text" onChange={this.handleFieldUpdate('disabilityAdditionalDescription')} value={dadosPessoais.input['disabilityAdditionalDescription']} className="form-control" placeholder="Descrição Deficiencia" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>
                            <Button className="btn btn-primary" onClick={dadosPessoais.updateDataSource} >SALVAR</Button>
                        </Form>
                    </div>
                }
            </div>
        );
    }
}
