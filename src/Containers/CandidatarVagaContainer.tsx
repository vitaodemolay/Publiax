import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { VagaDetalheModel } from '../Models/VagaDetalheModel';
import HeaderComponent from '../Components/VagaDetalhe/Header';
import VagaDetalheBody from '../Components/VagaDetalhe/Body';
import CandidatarFooterComponent from '../Components/VagaDetalhe/CandidatarFooter';
import { InscricaoVagaModel } from '../Models/InscricaoVagaModel';


class Props{
    @Inject vagaDetalhe : VagaDetalheModel;
    @Inject inscricaoVaga : InscricaoVagaModel; 
}

@Connection({
    modelStore: appModels,
    props: Props
  })
export default class CandidatarVagaContainer extends React.Component<Props> {

    componentDidMount(){
        const { vagaDetalhe } = this.props;
    }

    render() {
        const { vagaDetalhe, inscricaoVaga } = this.props;

        return (
            <div>
                <HeaderComponent>CONFIRMAÇÃO DE CANDIDATURA A VAGA</HeaderComponent>

                {vagaDetalhe.isLoading && <div>Carregando...</div>}
                {vagaDetalhe.isFailed && <div>Falhou!</div>}
                {vagaDetalhe.isCompleted && 
                    <div>
                        <VagaDetalheBody vaga={vagaDetalhe.response.data} inscricao={inscricaoVaga.getJobSubscription()}/> 
                        <CandidatarFooterComponent vagaDetalhe={vagaDetalhe} inscricaoVaga={inscricaoVaga} />
                    </div>
                }
            </div>
        );
    }


}
