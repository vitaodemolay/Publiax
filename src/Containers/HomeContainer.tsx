import React from "react";
import { Inject, Connection } from 'exredux';
import { VagasRecentesModel } from "../Models/VagasRecentesModel";
import { appModels } from "../AppModels";
import Jumbo from "../Components/Home/JumboComponent";
import About from "../Components/Home/AboutComponent";
import Works from "../Components/Home/WorksComponent";
import { Spinner } from "reactstrap";


class Props {
    @Inject vagasRecentes: VagasRecentesModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})


export default class HomeContainer extends React.Component<Props> {

    componentDidMount() {
        const { vagasRecentes } = this.props;
        vagasRecentes.get();
    }

    render() {
        const { vagasRecentes } = this.props;

        return (
            <div>
                <Jumbo />
                {vagasRecentes.isLoading && <Spinner color="success" />}
                {vagasRecentes.isFailed && <div>Erro ao carregar vagas!</div>}
                {vagasRecentes.isCompleted && <About vagas={vagasRecentes.response.data}/>}
                <Works />
            </div>
        );
    }
}