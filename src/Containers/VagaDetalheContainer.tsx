import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { VagaDetalheModel } from '../Models/VagaDetalheModel';
import HeaderComponent from '../Components/VagaDetalhe/Header';
import VagaDetalheBody from '../Components/VagaDetalhe/Body';
import FooterComponent from '../Components/VagaDetalhe/Footer';
import { InscricaoVagaModel } from '../Models/InscricaoVagaModel';
import { IJobSubscription } from '../Service/Interfaces/IJobSubscription';


class Props {
    @Inject vagaDetalhe: VagaDetalheModel;
    @Inject inscricaoVaga: InscricaoVagaModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})
export default class VagaDetalheContainer extends React.Component<Props> {
    private inscricao: IJobSubscription = null;

    componentDidMount() {
        const { inscricaoVaga } = this.props;

        this.inscricao = inscricaoVaga.getJobSubscription();
        console.log(this.inscricao);
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
                        <VagaDetalheBody vaga={vagaDetalhe.response.data} inscricao={this.inscricao} />
                        <FooterComponent vaga={vagaDetalhe.response.data} estaInscrito={this.inscricao != null && this.inscricao != undefined} />
                    </div>
                }

            </div>
        );
    }
}
