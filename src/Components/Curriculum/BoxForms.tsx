import React from 'react';
import { Container } from 'reactstrap';
import DadosPessoaisComponent from './Forms/DadosPessoais';
import DadosEnderecoComponent from './Forms/DadosEndereco';
import DadosProfissionaisComponent from './Forms/DadosProfissionais';
import EscolaridadeComponent from './Forms/Escolaridade';
import InformaticaComponent from './Forms/Informatica';
import LinguasEstrangeirasComponent from './Forms/LinguasEstrangeiras';
import OutrasInformacoesComponent from './Forms/OutrasInformacoes';
import CartaApresentacaoComponent from './Forms/CartaApresentacao';

import VisualizarComponent from './Forms/Visualizar';
import ImprimirComponent from './Forms/Imprimir';

import CurriculoComponent from './Forms/Curriculo';
import AvisosComponent from './Forms/Avisos';
import ParticipacoesComponent from './Forms/Participacoes';
import ConfiguracoesComponent from './Forms/Configuracoes';


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
                    <Route path="/curriculum/Informatica" component={InformaticaComponent}/>
                    <Route path="/curriculum/LinguasEstrangeiras" component={LinguasEstrangeirasComponent}/>
                    <Route path="/curriculum/OutrasInformacoes" component={OutrasInformacoesComponent}/>
                    <Route path="/curriculum/CartaApresentacao" component={CartaApresentacaoComponent}/>

                    <Route path="/curriculum/Visualizar" component={VisualizarComponent}/>
                    <Route path="/curriculum/Imprimir" component={ImprimirComponent}/>

                    <Route path="/curriculum/Curriculo" component={CurriculoComponent}/>
                    <Route path="/curriculum/Avisos" component={AvisosComponent}/>
                    <Route path="/curriculum/Participacoes" component={ParticipacoesComponent}/>
                    <Route path="/curriculum/Configuracoes" component={ConfiguracoesComponent}/>

                    <Redirect to="/curriculum/DadosPessoais" />

                </Switch>
            </Container>
        );
    }
}