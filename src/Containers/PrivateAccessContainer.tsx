import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import BodyComponent from '../Components/PrivateAccess/Body';
import HeaderComponent from '../Components/PrivateAccess/Header';



class Props{
    
}

@Connection({
    modelStore: appModels,
    props: Props
  })

export default class PrivateAccessContainer extends React.Component<Props> {
    render(){
        return(
            <div>
                <HeaderComponent>Login Requerido</HeaderComponent>
                <BodyComponent />
            </div>
        ); 
    }

}
