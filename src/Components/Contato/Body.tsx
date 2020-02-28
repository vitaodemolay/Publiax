import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class BodyComponent extends React.Component {
    render() {
        return (
            <Container className="box-container box-contato">
                <Row>
                    <div className="contatoDescription">
                        <p>Deixe sua mensagem através do formulário abaixo, ligue para a Winn Promoções e Eventos ou escreva para nosso e-mail. Esperamos que este seja o início de mais um case de sucesso.</p>
                    </div>
                </Row>
                <Row>
                    <Col lg="6">
                        <div className="contatoFormContainer" >
                            <Form>
                                <FormGroup>
                                    <Label for="nome">Nome:</Label>
                                    <Input type="text" name="nome" id="TbxNome" placeholder="Digite o seu nome completo" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email:</Label>
                                    <Input type="email" name="email" id="TbxEmail" placeholder="Digite o seu email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="assunto">Assunto:</Label>
                                    <Input type="text" name="assunto" id="TbxAssunto" placeholder="Digite o assunto que deseja tratar" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="menssagem">Menssagem:</Label>
                                    <Input type="textarea" name="menssagem" id="TbxMenssagem" placeholder="Digite a sua menssagem" />
                                </FormGroup>
                                <Button>Enviar</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="box_endereco">
                            <p>WINN PROMOÇÕES E EVENTOS</p>
                            <p><strong>(11) 3641-9239 / 3641-9095</strong></p>
                            <p><abbr title="Email">Email:</abbr> <a href="mailto:contato@winnpromocoes.com.br">contato@winnpromocoes.com.br</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}