import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { VagaDetalheModel } from '../Models/VagaDetalheModel';
import HeaderComponent from '../Components/VagaDetalhe/Header';
import VagaDetalheBody from '../Components/VagaDetalhe/Body';
import FooterComponent from '../Components/VagaDetalhe/Footer';


class Props{
    @Inject vagaDetalhe : VagaDetalheModel;
}

@Connection({
    modelStore: appModels,
    props: Props
  })
export default class VagaDetalheContainer extends React.Component<Props> {

    componentDidMount(){
        const { vagaDetalhe } = this.props;
    }

    render() {
        const { vagaDetalhe } = this.props;

        return (
            <div>
                <HeaderComponent>DETALHES DA VAGA</HeaderComponent>

                {vagaDetalhe.isLoading && <div>Carregando...</div>}
                {vagaDetalhe.isFailed && <div>Falhou!</div>}
                {vagaDetalhe.isCompleted && 
                    <div> 
                        <VagaDetalheBody vaga={vagaDetalhe.response.data}/>
                        <FooterComponent vaga={vagaDetalhe.response.data}/>
                    </div>
                }

            </div>
        );
    }
}
