import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Form, Label, Alert, FormGroup, Input } from "reactstrap";
import { NotificationModel } from "../../Models/NotificationModel";

interface Props {
    notificationModel: NotificationModel
}

export default class SendNotificationFormModalComponent extends React.Component<Props> {

    handleFieldUpdate = (fieldName: string) => evt => {
        const { notificationModel } = this.props;
        notificationModel.doFieldUpdate(fieldName, evt.target.value);
    }

    render() {
        const { notificationModel } = this.props;

        if (notificationModel.showNotificationSendForm) {
            return (
                <Modal isOpen={notificationModel.showNotificationSendForm}>
                    <ModalHeader>
                        <Label>Envio de Notificação</Label>
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Form id="send-notification" className="">
                                <div>
                                    {notificationModel.showErrorMessage &&
                                        <Alert color="danger">
                                            <span>{notificationModel.errorMessage}</span>
                                        </Alert>
                                    }
                                </div>
                                <FormGroup>
                                    <Label>Destinatário</Label>
                                    <Input type="text" readOnly={true} value={notificationModel.input['recipient']} className="form-control" placeholder="Destinatário" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Assunto</Label>
                                    <Input type="text" onChange={this.handleFieldUpdate('subject')} value={notificationModel.input['subject']} className="form-control" placeholder="Assunto" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Mensagem</Label>
                                    <Input type="textarea" onChange={this.handleFieldUpdate('body')} value={notificationModel.input['body']} className="form-control" placeholder="Mensagem" />
                                </FormGroup>
                            </Form>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={notificationModel.sendNotification}>Enviar</Button>{' '}
                        <Button color="danger" onClick={notificationModel.closeSendNotificationForm}>Cancela</Button>
                    </ModalFooter>
                </Modal>
            );
        }

        return (
            <React.Fragment />
        );
    }
}