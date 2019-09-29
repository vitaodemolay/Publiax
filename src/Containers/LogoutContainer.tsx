import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { AuthModel } from '../Models/AuthModel';
import RedirectContainer from './RedirectContainer';

class Props {
    @Inject auth : AuthModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class LogoutContainer extends React.Component<Props>{
    componentWillMount() {
        const { auth } = this.props;
        auth.purgeSavedToken();
    }
    
    render() {
        return (<RedirectContainer />);
    }
}