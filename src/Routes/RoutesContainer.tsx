import { Switch, Route, Redirect } from 'react-router';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Home from '../Components/Home/HomeComponent';
import VagasContainer from '../Containers/VagasContainer';

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
                    <Route exact={true} path="/vagas" component={VagasContainer} />
                    <Route exact={true} path="/home" component={Home} />
                    <Route exact={true} path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}