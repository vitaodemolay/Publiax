import React from 'react';
import { Inject, Connection } from 'exredux';
import { EscolaridadeModel } from '../../../../Models/EscolaridadeModel';
import { appModels } from '../../../../AppModels';
import { Container, Row, Button } from 'reactstrap';
import FormEducational from './EscolaridadeForm';
import HistoryEducational from './EscolaridadeHistory';
import CofirmationDeleteModal from '../Gerais/ConfirmationDeleteModal';

class Props {
    @Inject escolaridadeModel: EscolaridadeModel
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class EscolaridadeComponent extends React.Component<Props> {
    private titleModal = "Confirmação de Remoção de Escolaridade";

    loadFields() {
        const { escolaridadeModel } = this.props;
        escolaridadeModel.getEducationalsDataOnSource();
    }

    componentDidMount() {
        this.loadFields();
    }

    CofirmationDeleteMethod(confirmRemove: boolean, sender: EscolaridadeComponent) {
        const { escolaridadeModel } = sender.props;
        if (confirmRemove) {
            escolaridadeModel.deleteSetedEducational();
            return;
        }
        escolaridadeModel.setEducationalToDelete("");
    }

    getEducationalTitle() {
        const { escolaridadeModel } = this.props;
        if (escolaridadeModel.isDeleting()) {
            return escolaridadeModel.getEducationalToDelete().title;
        }

        return "";
    }

    render() {
        const { escolaridadeModel } = this.props;
        return (
            <div>
                {escolaridadeModel.isLoading && <div>Carregando...</div>}
                {escolaridadeModel.isFailed && <div>Falhou!</div>}
                {escolaridadeModel.isCompleted &&
                    <div>
                        <Container>
                            <h2>Escolaridade</h2>
                            <hr />
                        </Container>
                        {escolaridadeModel.isEditing() ? (
                            <FormEducational escolaridadeModel={escolaridadeModel} />
                        ) :
                            (
                                <div>
                                    <HistoryEducational escolaridadeModel={escolaridadeModel} />

                                    <Row>
                                        <Button onClick={escolaridadeModel.preperNewEducational} className="btn primary">Novo Historico</Button>
                                    </Row>
                                </div>
                            )
                        }

                        <CofirmationDeleteModal showModal={escolaridadeModel.isDeleting()}
                            confirmationCall={this.CofirmationDeleteMethod}
                            modalTitle={this.titleModal}
                            objectName={this.getEducationalTitle()}
                            sender={this} />

                    </div>
                }
            </div>
        );
    }
}