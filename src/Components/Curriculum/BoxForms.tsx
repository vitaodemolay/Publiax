import React from 'react';
import { Container } from 'reactstrap';
import DadosPessoaisComponent from './Forms/DadosPessoais';
import DadosEnderecoComponent from './Forms/DadosEndereco';
import DadosProfissionaisComponent from './Forms/DadosProfissionais';
import DadosEscolaridadeComponent from './Forms/DadosEscolaridade';
import InformaticaComponent from './Forms/Informatica';

import { Switch, Route, Redirect } from 'react-router';

export default class BoxFormsComponent extends React.Component {
    render() {
        return (
            <Container className="box-form">
                <Switch>
                    <Route path="/curriculum/Dadospessoais" component={DadosPessoaisComponent}/>
                    <Route path="/curriculum/Dadosendereco" component={DadosEnderecoComponent}/>
                    <Route path="/curriculum/DadosProfissionais" component={DadosProfissionaisComponent}/>
                    <Route path="/curriculum/DadosEscolaridade" component={DadosEscolaridadeComponent}/>
                    <Route path="/curriculum/Informatica" component={InformaticaComponent}/>

                    <Redirect to="/curriculum/Dadospessoais" />
                </Switch>
            </Container>
        );
    }
}