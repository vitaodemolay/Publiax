import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

export default class SidebarComponent extends React.Component {
    render() {
        return (

            <Container className="container-sidebar">
                <ListGroup>
                    <h1 className="">Cúrriculo</h1>
                    <ListGroupItem tag="a" href="#"><span className="lnr lnr-user"></span>Dados Pessoais</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-briefcase"></span>Dados Profissionais</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-graduation-hat"></span>Escolaridade</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-screen"></span>Informática</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-bubble"></span>Línguas Estrangeiras</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-question-circle"></span>Outras Informações</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-license"></span>Carta de Apresentação</ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-eye"></span>Visualizar</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-printer"></span>Imprimir</ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <h1 className="">Minha Conta</h1>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-users"></span>Curriculo</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-alarm"></span>Avisos</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-exit-up"></span>Participações</ListGroupItem>
                    <ListGroupItem tag="a" href="#" ><span className="lnr lnr-cog"></span>Configurações</ListGroupItem>
                </ListGroup>
            </Container>

        )
    }
}