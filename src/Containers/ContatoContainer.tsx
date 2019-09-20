import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import HeaderComponent from '../Components/Contato/Header';
import BodyComponent from '../Components/Contato/Body';



class Props{
    
}

@Connection({
    modelStore: appModels,
    props: Props
  })

export default class ContatoContainer extends React.Component<Props> {
    render(){
        return(
            <div>
                <HeaderComponent>Contato</HeaderComponent>
                <BodyComponent/>
            </div>
        ); 
    }

}
