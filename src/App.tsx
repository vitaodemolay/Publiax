
import * as React from 'react';
import { Provider} from 'exredux';
import { appModels } from './AppModels';
import Menu from './Components/Menu/MenuComponent';
import Footer from './Components/Footer/FooterComponent';
import InitializerContainer from './Containers/InitializerContainer';
import { Routes } from './Routes/RoutesContainer';

export default class App extends React.Component{

    render() {
        return (
            <Provider modelStore={appModels}>
                <InitializerContainer />
                <Menu />
                <Routes />
                <Footer />
            </Provider>
        );
    }
}
