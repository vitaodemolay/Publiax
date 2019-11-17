import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../AppModels';
import { VagaDetalheModel } from '../Models/VagaDetalheModel';
import HeaderComponent from '../Components/VagaDetalhe/Header';


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
        // vagaDetalhe.get();
    }

    render() {
        const { vagaDetalhe } = this.props;

        return (
            <div>
                <HeaderComponent>DETALHES DA VAGA</HeaderComponent>

                {/* Area Resultado Busca Vagas */}
                {/* {vagasBuscaModel.isResultVisible() && vagasBuscaModel.isLoading && <div>Carregando...</div>}
                {vagasBuscaModel.isResultVisible() && vagasBuscaModel.isFailed && <div>Falhou!</div>}
                {vagasBuscaModel.isResultVisible() && vagasBuscaModel.isCompleted && <SearchResult vagas={vagasBuscaModel.response.data}/>}      */}
            </div>
        );
    }
}
