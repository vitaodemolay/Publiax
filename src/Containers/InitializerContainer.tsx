import * as React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { AuthModel } from '../Models/AuthModel';

class Props {
    @Inject auth : AuthModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class InitializerContainer extends React.Component<Props>{
    componentWillMount() {
        const { auth } = this.props;
        auth.init(window.location.origin.toString());
    }
    
    render(){
        return <React.Fragment />;
    }
}