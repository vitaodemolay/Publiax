import React from 'react';
import { Container } from 'reactstrap';
import DadosPessoaisComponent from './Forms/DadosPessoais';
import DadosEnderecoComponent from './Forms/DadosEndereco';
import DadosProfissionaisComponent from './Forms/DadosProfissionais/DadosProfissionaisRoot';
import EscolaridadeComponent from './Forms/Escolaridade/EscolaridadeRoot';
import OutrasQualificacoesComponent from './Forms/OutrasQualificacoes/OutrasQualificacoesRoot';
import LingEstrageirasComponent from './Forms/LingEstrangeiras/LingEstrangeirasRoot';
import CartaApresentacaoComponent from './Forms/CartaApresentacao';

import VisualizarComponent from './Forms/Visualizar';



import { Switch, Route, Redirect } from 'react-router';

export default class BoxFormsComponent extends React.Component {
    render() {
        return (
            <Container className="box-form">
                <Switch>

                    <Route path="/curriculum/DadosPessoais" component={DadosPessoaisComponent}/>
                    <Route path="/curriculum/DadosEndereco" component={DadosEnderecoComponent}/>
                    <Route path="/curriculum/DadosProfissionais" component={DadosProfissionaisComponent}/>
                    <Route path="/curriculum/Escolaridade" component={EscolaridadeComponent}/>
                    <Route path="/curriculum/OutrasQualificacoes" component={OutrasQualificacoesComponent}/>
                    <Route path="/curriculum/LinguasEstrangeiras" component={LingEstrageirasComponent}/>
                    <Route path="/curriculum/CartaApresentacao" component={CartaApresentacaoComponent}/>

                    <Route path="/curriculum/Visualizar" component={VisualizarComponent}/>
                    <Route path="/curriculum/Imprimir" component={VisualizarComponent}/>

                    <Redirect to="/curriculum/DadosPessoais" />
                </Switch>
            </Container>
        );
    }
}