import React from 'react';
import { Container } from 'reactstrap';
import DadosPessoaisComponent from './Forms/DadosPessoais';
import { Switch, Route, Redirect } from 'react-router';
import DadosEnderecoComponent from './Forms/DadosEndereco';


export default class BoxFormsComponent extends React.Component {
    render() {
        return (
            <Container className="box-form">
                <Switch>
                    <Route path="/curriculum/Dadospessoais" component={DadosPessoaisComponent}/>
                    <Route path="/curriculum/Dadosendereco" component={DadosEnderecoComponent}/>
                    <Redirect to="/curriculum/Dadospessoais" />
                </Switch>
            </Container>
        );
    }
}