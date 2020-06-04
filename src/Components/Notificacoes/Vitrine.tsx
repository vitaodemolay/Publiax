import React from 'react';
import { Container, Row, Col, Button, Table, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { VagaTools } from '../../Models/VagaTools';
import { NotificationModel } from '../../Models/NotificationModel';
import SendNotificationFormModalComponent from './SendNotificationFormModal';

interface Props {
    notificationModel: NotificationModel
}

export default class VitrineComponent extends React.Component<Props> {



    render() {
        const { notificationModel } = this.props;

        return (
            <div>
                <Container className="">
                    <Row>
                        <Col>
                            <Button className="btn btn-primary" onClick={notificationModel.openSendNotificationForm} >Enviar Mensagem</Button>
                        </Col>
                        <Col>
                            <Button className="btn btn-secundary" onClick={notificationModel.getNotificationOnSource}>Atualizar Lista</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Enviado Por</th>
                                    <th>Assunto</th>
                                    <th>Mensagem</th>
                                    <th>Data Recebimento</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notificationModel.notifications.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.sender}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.body}</td>
                                        <td>{VagaTools.getPublicacaoFormat(item.registerdate)}</td>
                                        <td>
                                            <UncontrolledDropdown size="sm">
                                                <DropdownToggle caret>
                                                    {item.status == 0 ? <span className="lnr lnr-envelope">{"  Não Lida"}</span> : <span className="lnr lnr-file-empty">{"  Lida"}</span>}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={() => notificationModel.changeStatusNotification(item.notificationId, item.status == 0 ? 1 : 0)}>
                                                        {item.status == 0 ? "Marcar como Lida" : "Marcar como Não Lida"}
                                                    </DropdownItem>
                                                    <DropdownItem onClick={() => notificationModel.changeStatusNotification(item.notificationId, 3)}>
                                                        Deletar
                                                </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Container>

                <SendNotificationFormModalComponent notificationModel={notificationModel} />
            </div>
        )
    }
}