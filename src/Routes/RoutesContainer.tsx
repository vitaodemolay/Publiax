import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Home from '../Components/Home/HomeComponent';
import VagasContainer from '../Containers/VagasContainer';
import QuemSomosContainer from '../Containers/QuemSomosContainer';
import ContatoContainer from '../Containers/ContatoContainer';
import LoginRedirectContainer from '../Containers/LoginRedirect';

class Props {
    location?: any;
}

export class Routes extends React.Component<Props>{
    componentDidMount = () => {

    }

    componentDidUpdate = () => {

    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/token/:token" component={Home} />
                    <Route exact={true} path="/login" component={LoginRedirectContainer} />
                    <Route exact={true} path="/contato" component={ContatoContainer} />
                    <Route exact={true} path="/quemsomos" component={QuemSomosContainer} />
                    <Route exact={true} path="/vagas" component={VagasContainer} />
                    <Route exact={true} path="/home" component={Home} />
                    <Route exact={true} path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}