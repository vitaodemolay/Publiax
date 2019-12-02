import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DadosPessoaisComponent from './Forms/DadosPessoais';
import DadosProfissionaisComponent from './Forms/DadosProfissionais';
import EscolaridadeComponent from './Forms/Escolaridade';

export default class BoxFormsComponent extends React.Component {
    render() {
        return (
            <Container className="box-form">
                <DadosPessoaisComponent/>
                <EscolaridadeComponent/>
            </Container>
        )
    }
}