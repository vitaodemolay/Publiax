import React from 'react';
import { Inject, Connection } from 'exredux';
import { VagasRecentesModel } from '../Models/VagasRecentesModel';
import { appModels } from '../AppModels';
import SearchVagasBar from '../Components/Vagas/SearchBarComponent';
import SearchResult from '../Components/Vagas/SearchResultComponent';
import VagasRecentes from '../Components/Vagas/VagasRecentesComponent';
import { VagasEncontradasBuscaModel } from '../Models/VagasEncontradasBuscaModel';


class Props{
    @Inject vagasRecentes : VagasRecentesModel;
    @Inject vagasBuscaModel: VagasEncontradasBuscaModel;
}

@Connection({
    modelStore: appModels,
    props: Props
  })
export default class VagasContainer extends React.Component<Props> {



    componentDidMount(){
        const { vagasRecentes } = this.props;
        vagasRecentes.get();
    }


    render() {
        const { vagasRecentes, vagasBuscaModel } = this.props;

        return (
            <div>
                <SearchVagasBar vagasBuscaModel={vagasBuscaModel}/>

                {/* Area Resultado Busca Vagas */}
                {vagasBuscaModel.isResultVisible() && vagasBuscaModel.isLoading && <div>Carregando...</div>}
                {vagasBuscaModel.isResultVisible() && vagasBuscaModel.isFailed && <div>Falhou!</div>}
                {vagasBuscaModel.isResultVisible() && vagasBuscaModel.isCompleted && <SearchResult vagas={vagasBuscaModel.response.data}/>}     

                {/* Area Vagas Recentes */}
                {vagasRecentes.isLoading && <div>Carregando...</div>}
                {vagasRecentes.isFailed && <div>Falhou!</div>}
                {vagasRecentes.isCompleted && <VagasRecentes vagas={vagasRecentes.response.data}/>}
            </div>
        );
    }
}
