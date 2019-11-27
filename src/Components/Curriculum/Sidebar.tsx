import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

export default class SidebarComponent extends React.Component {
    render() {
        return (

            <Container className="container-sidebar">
                <ListGroup>
                    <h1 className="my-4">Cúrriculo</h1>
                    <ListGroupItem tag="a" href="#" >Dados Pessoais</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Dados Profissionais</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Escolaridade</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Informática</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Línguas Estrangeiras</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Outras Informações</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Carta de Apresentação</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Visualizar</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Imprimir</ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <h1 className="my-4">Minha Conta</h1>
                    <ListGroupItem tag="a" href="#" >Curriculo</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Avisos</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Participações</ListGroupItem>
                    <ListGroupItem tag="a" href="#" >Configurações</ListGroupItem>
                </ListGroup>
            </Container>

        )
    }
}