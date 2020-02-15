import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class SidebarComponent extends React.Component {
    render() {
        return (

            <div className="container-sidebar">
                <ListGroup>
                    <h1 className="">Cúrriculo</h1>
                    <ListGroupItem tag="a" href="#/curriculum/DadosPessoais"><span className="lnr lnr-user"></span>Dados Pessoais</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/DadosEndereco"><span className="lnr lnr-user"></span>Dados de Endereço</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/DadosProfissionais" ><span className="lnr lnr-briefcase"></span>Dados Profissionais</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/Escolaridade" ><span className="lnr lnr-graduation-hat"></span>Escolaridade</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/OutrasQualificacoes" ><span className="lnr lnr-screen"></span>Outras Qualificações</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/LinguasEstrangeiras" ><span className="lnr lnr-bubble"></span>Línguas Estrangeiras</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/CartaApresentacao" ><span className="lnr lnr-license"></span>Carta de Apresentação</ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem tag="a" href="#/curriculum/Visualizar" ><span className="lnr lnr-eye"></span>Visualizar</ListGroupItem>
                    <ListGroupItem tag="a" href="#/curriculum/Imprimir" ><span className="lnr lnr-printer"></span>Imprimir</ListGroupItem>
                </ListGroup>

            </div>

        )
    }
}