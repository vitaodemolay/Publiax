import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../../../../AppModels';
import { Container, Row, Button } from 'reactstrap';
import { OutrasQualificacoesModel } from '../../../../Models/OutrasQualificacoesModel';
import CofirmationDeleteModal from '../Gerais/ConfirmationDeleteModal';
import FormOutrasQualificacoes from './OutrasQualificacoesForm';
import HistoryOutrasQualificacoes from './OutrasQualificacoesHistory';


class Props {
    @Inject outrasQualificacoesModel: OutrasQualificacoesModel
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class OutrasQualificacoesComponent extends React.Component<Props> {
    private titleModal = "Confirmação de Remoção de Qualificações";
    
    loadFields() {
        const { outrasQualificacoesModel } = this.props;
        outrasQualificacoesModel.getHardSkillsDataOnSource();
    }

    componentDidMount() {
        this.loadFields();
    }

    CofirmationDeleteMethod(confirmRemove: boolean, sender: OutrasQualificacoesComponent) {
        const { outrasQualificacoesModel } = sender.props;
        if (confirmRemove) {
            outrasQualificacoesModel.deleteSetedHardSkill();
            return;
        }
        outrasQualificacoesModel.setHardSkillToDelete("");
    }

    getHardSkillTitle() {
        const { outrasQualificacoesModel } = this.props;
        if (outrasQualificacoesModel.isDeleting()) {
            return outrasQualificacoesModel.getHardSkillToDelete().description;
        }

        return "";
    }

    render() {
        const { outrasQualificacoesModel } = this.props;
        return (
            <div>
                {outrasQualificacoesModel.isLoading && <div>Carregando...</div>}
                {outrasQualificacoesModel.isFailed && <div>Falhou!</div>}
                {outrasQualificacoesModel.isCompleted &&
                    <div>
                        <Container>
                            <h2>Outras Qualificações</h2>
                            <hr />
                        </Container>
                        {outrasQualificacoesModel.isEditing() ? (
                            <FormOutrasQualificacoes outrasQualificacoesModel={outrasQualificacoesModel} />
                        ) :
                            (
                                <div>
                                    <HistoryOutrasQualificacoes outrasQualificacoesModel={outrasQualificacoesModel} />

                                    <Row>
                                        <Button onClick={outrasQualificacoesModel.preperNewHardSkill} className="btn primary">Novo Historico</Button>
                                    </Row>
                                </div>
                            )
                        }

                        <CofirmationDeleteModal showModal={outrasQualificacoesModel.isDeleting()}
                            confirmationCall={this.CofirmationDeleteMethod}
                            modalTitle={this.titleModal}
                            objectName={this.getHardSkillTitle()}
                            sender={this} />

                    </div>
                }
            </div>
        );
    }
}