import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Button, Row } from 'reactstrap';
import { appModels } from '../../../../AppModels';
import { DadosProfissionaisModel } from '../../../../Models/DadosProfissionaisModel';
import FormProfissionalData from './DadosProfissionaisForm';
import HistoryPosition from './DadosProfissionaisHistory';
import CofirmationDeleteModal from '../Gerais/ConfirmationDeleteModal'

class Props {
    @Inject dadosProfissionais: DadosProfissionaisModel;
}


@Connection({
    modelStore: appModels,
    props: Props
})

export default class DadosProfissionaisComponent extends React.Component<Props> {
    private titleModal = "Confirmação de Remoção de Posição";

    loadFields() {
        const { dadosProfissionais } = this.props;
        dadosProfissionais.getPositionsDataOnSource();
    }

    componentDidMount() {
        this.loadFields();
    }

    CofirmationDeleteMethod(confirmRemove: boolean, sender: DadosProfissionaisComponent){
        const { dadosProfissionais } = sender.props;
        if(confirmRemove){
            dadosProfissionais.deleteSetedPosition();
            return;
        }
        dadosProfissionais.setPositionToDelete("");
    }

    getPositionTitle(){
        const { dadosProfissionais } = this.props;
        if(dadosProfissionais.isDeleting()){
            return dadosProfissionais.getPositionToDelete().title;
        }

        return "";
    }

    render() {
        const { dadosProfissionais } = this.props;
        return (
            <div>
                {dadosProfissionais.isLoading && <div>Carregando...</div>}
                {dadosProfissionais.isFailed && <div>Falhou!</div>}
                {dadosProfissionais.isCompleted &&
                    <div>
                        <Container>
                            <h2>Dados Profissionais</h2>
                            <hr />
                        </Container>

                        {dadosProfissionais.isEditing() ? (
                            <FormProfissionalData dadosProfissionais={dadosProfissionais} />
                        ) :
                            (
                                <div>
                                    <HistoryPosition dadosProfissionais={dadosProfissionais} />

                                    <Row>
                                        <Button onClick={dadosProfissionais.preperNewPosition} className="btn primary">Novo Historico</Button>
                                    </Row>
                                </div>
                            )
                        }

                        <CofirmationDeleteModal showModal={dadosProfissionais.isDeleting()} 
                                                confirmationCall={this.CofirmationDeleteMethod} 
                                                modalTitle={this.titleModal} 
                                                objectName={this.getPositionTitle()}
                                                sender={this}/>
                    </div>
                }
            </div>
        );
    }
}

