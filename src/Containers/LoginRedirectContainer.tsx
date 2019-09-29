import React from 'react';
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

export default class LoginRedirectContainer extends React.Component<Props>{
    componentWillMount() {
        const { auth } = this.props;
        const addressToRedirect = auth.getEndpointToGetToken();
        window.location.replace(addressToRedirect);
    }
    
    render() {
        return (<section>Redirecionando...</section>);
    }
}