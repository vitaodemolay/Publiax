
import * as React from 'react';
import { Provider } from 'exredux';
import { appModels } from './AppModels';
import Menu from './Components/Menu/MenuComponent';
import Footer from './Components/Footer/FooterComponent';
import { Routes } from './Routes/RoutesContainer';



class App extends React.Component {
    render() {
        return (
            <Provider modelStore={appModels}>
                <Menu />
                <Routes />
                <Footer />
            </Provider>
        );
    }
}

export default App;