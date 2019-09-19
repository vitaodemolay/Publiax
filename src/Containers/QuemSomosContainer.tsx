import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import HeaderComponent from '../Components/QuemSomos/Header';
import VitrineComponent from '../Components/QuemSomos/Vitrine';


class Props{
    
}

@Connection({
    modelStore: appModels,
    props: Props
  })

export default class QuemSomosContainer extends React.Component<Props> {
    render(){
        return(
            <div>
                <HeaderComponent>WINN PROMOÇÕES E EVENTOS</HeaderComponent>
                <VitrineComponent/>
            </div>
        ); 
    }

}
