import React from 'react';
import { Inject, Connection } from 'exredux';
import { appModels } from '../../../../AppModels';
import { Container, Row, Button } from 'reactstrap';
import { LingEstrangeirasModel } from '../../../../Models/LingEstrangeirasModel';
import CofirmationDeleteModal from '../Gerais/ConfirmationDeleteModal';
import FormLingEstrangeiras from './LingEstrangeirasForm';
import HistoryLingEstrangeiras from './LingEstrangeirasHistory';


class Props {
    @Inject lingEstrangeirasModel: LingEstrangeirasModel
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class LingEstrageirasComponent extends React.Component<Props> {
    private titleModal = "Confirmação de Remoção de Idioma";
    
    loadFields() {
        const { lingEstrangeirasModel } = this.props;
        lingEstrangeirasModel.getLanguageSkillsDataOnSource();
    }

    componentDidMount() {
        this.loadFields();
    }

    CofirmationDeleteMethod(confirmRemove: boolean, sender: LingEstrageirasComponent) {
        const { lingEstrangeirasModel } = sender.props;
        if (confirmRemove) {
            lingEstrangeirasModel.deleteSetedLanguageSkill();
            return;
        }
        lingEstrangeirasModel.setLanguageSkillToDelete("");
    }

    getLanguageSkillTitle() {
        const { lingEstrangeirasModel } = this.props;
        if (lingEstrangeirasModel.isDeleting()) {
            return lingEstrangeirasModel.getLanguageSkillToDelete().description;
        }

        return "";
    }

    render() {
        const { lingEstrangeirasModel } = this.props;
        return (
            <div>
                {lingEstrangeirasModel.isLoading && <div>Carregando...</div>}
                {lingEstrangeirasModel.isFailed && <div>Falhou!</div>}
                {lingEstrangeirasModel.isCompleted &&
                    <div>
                        <Container>
                            <h2>Linguas Estrangeiras</h2>
                            <hr />
                        </Container>
                        {lingEstrangeirasModel.isEditing() ? (
                            <FormLingEstrangeiras lingEstrangeirasModel={lingEstrangeirasModel} />
                        ) :
                            (
                                <div>
                                    <HistoryLingEstrangeiras lingEstrangeirasModel={lingEstrangeirasModel} />

                                    <Row>
                                        <Button onClick={lingEstrangeirasModel.preperNewLanguageSkill} className="btn primary">Novo Historico</Button>
                                    </Row>
                                </div>
                            )
                        }

                        <CofirmationDeleteModal showModal={lingEstrangeirasModel.isDeleting()}
                            confirmationCall={this.CofirmationDeleteMethod}
                            modalTitle={this.titleModal}
                            objectName={this.getLanguageSkillTitle()}
                            sender={this} />

                    </div>
                }
            </div>
        );
    }
}