import React from "react";
import { DadosProfissionaisModel } from "../../../../Models/DadosProfissionaisModel";
import { IPositionHeld } from "../../../../Service/Interfaces/IPositionHeld";
import { ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col, Label, ListGroupItemText, FormGroup, Button } from "reactstrap";

interface Props {
    dadosProfissionais: DadosProfissionaisModel
}

export default class HistoryPosition extends React.Component<Props> {

    handleEditButtonsOnClick = () => evt => {
        const positionId = (evt.target as HTMLButtonElement).getAttribute('data-pid');
        if (positionId != "") {
            this.props.dadosProfissionais.editExistsPosition(positionId);
        }
    }

    handleDeletePosition = () => evt => {
        const positionId = (evt.target as HTMLButtonElement).getAttribute('data-pid');
        if (positionId != "") {
            this.props.dadosProfissionais.setPositionToDelete(positionId);
        }
    }

    render() {
        const { dadosProfissionais } = this.props;
        let result = (
            <div>
                Você ainda não Registrou nenhum historico profissional.
        </div>
        );

        let positions: IPositionHeld[] = dadosProfissionais.getHistoryPosition();
        if (positions !== null && positions.length > 0) {

            result = (
                <ListGroup>
                    {positions.map((position) => (
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <Row>
                                    <Col md={2}>
                                        <Label>Empresa:</Label>
                                    </Col>
                                    <Col md={10}>
                                        <strong>{position.title}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <FormGroup>
                                    <Label>Descrição:  </Label>
                                    <span>{position.summary}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md={4}>
                                            <Label>Posição Atual: </Label>
                                            <span>{position.actual ? "Sim" : "Não"}</span>
                                        </Col>

                                        <Col md={4}>
                                            <Label>Inicio: </Label>
                                            <span>{position.startIn}</span>
                                        </Col>

                                        <Col md={4}>
                                            <Label>Saída: </Label>
                                            <span>{position.endIn}</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            <Button onClick={this.handleEditButtonsOnClick()} data-pid={position.positionHeldId} className="btn primary">Editar</Button>
                                        </Col>
                                        <Col md={4}>
                                            <Button onClick={this.handleDeletePosition()} data-pid={position.positionHeldId} className="btn danger">Remover</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </ListGroupItemText>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            );
        }

        return result;
    }
}
