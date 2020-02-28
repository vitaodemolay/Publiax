import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

interface Props {
    showModal: boolean,
    modalTitle: string,
    objectName: string,
    confirmationCall,
    sender: any
}

export default class CofirmationDeleteModal extends React.Component<Props> {
    handleToButonsClick = (value: boolean) => evt => {
        this.props.confirmationCall(value, this.props.sender);
    }

    render() {
        const { showModal,
            modalTitle,
            objectName,
        } = this.props;

        if (showModal) {
            return (
                <Modal isOpen={showModal}>
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalBody>

                        <p>Você Confirma a Remoção de <strong>"{objectName}"</strong>?</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleToButonsClick(true)}>Sim</Button>{' '}
                        <Button color="danger" onClick={this.handleToButonsClick(false)}>Cancela</Button>
                    </ModalFooter>
                </Modal>
            )
        }

        return (
            <React.Fragment />
        );
    }
}