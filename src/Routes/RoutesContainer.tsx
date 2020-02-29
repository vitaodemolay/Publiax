import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Home from '../Components/Home/HomeComponent';
import VagasContainer from '../Containers/VagasContainer';
import CadastroCurriculoContainer from '../Containers/CurriculumContainer';
import QuemSomosContainer from '../Containers/QuemSomosContainer';
import ContatoContainer from '../Containers/ContatoContainer';
import LoginRedirectContainer from '../Containers/LoginRedirectContainer';
import RedirectContainer from '../Containers/RedirectContainer';
import RouterHandle from './RouterHandle';
import LogoutContainer from '../Containers/LogoutContainer';
import { AuthModel } from '../Models/AuthModel';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import PrivateAccessContainer from '../Containers/PrivateAccessContainer';
import VagaDetalheContainer from '../Containers/VagaDetalheContainer';
import CandidatarVagaContainer from '../Containers/CandidatarVagaContainer';

class Props {
    @Inject auth?: AuthModel;
}



const PrivateRoute = ({ auth: Auth, component: Component, ...rest }) => (
    // tslint:disable-next-line:jsx-no-lambda
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated() === true
            ? <Component {...props} />
            : <PrivateAccessContainer />
    )} />
);

@Connection({
    modelStore: appModels,
    props: Props
})

export class Routes extends React.Component<Props>{

    private isAuthenticated = () => {
        const { auth } = this.props;
        return auth.isAuthenticated();
    }


    render() {
        const { auth } = this.props;
        return (
            <HashRouter>
                <RouterHandle />
                <Switch>
                    <PrivateRoute auth={auth} path="/curriculum" component={CadastroCurriculoContainer} />
                    <PrivateRoute auth={auth} path="/candidatarvaga/:id" component={CandidatarVagaContainer} />
                    <Route path="/token/:token" component={RedirectContainer} />
                    <Route path="/login" component={LoginRedirectContainer} />
                    <Route path="/logout" component={LogoutContainer} />
                    <Route path="/contato" component={ContatoContainer} />
                    <Route path="/quemsomos" component={QuemSomosContainer} />
                    <Route path="/vagas" component={VagasContainer} />
                    <Route path="/vagadetalhe/:id" component={VagaDetalheContainer} />
                    <Route path="/home" component={Home} />
                    <Route path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}