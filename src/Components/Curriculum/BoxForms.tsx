import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DadosPessoaisComponent from './Forms/DadosPessoais';

export default class BoxFormsComponent extends React.Component {
    render() {
        return (
            <Container className="box-form">
                <DadosPessoaisComponent/>
            </Container>
        )
    }
}