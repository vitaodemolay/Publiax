import React from "react";
import { EscolaridadeModel } from "../../../../Models/EscolaridadeModel";
import { IEducational } from "../../../../Service/Interfaces/IEducational";
import { ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col, Label, FormGroup, ListGroupItemText, Button } from "reactstrap";



interface Props {
    escolaridadeModel: EscolaridadeModel
}

export default class HistoryEducational extends React.Component<Props> {

    handleEditButtonsOnClick = () => evt => {
        const positionId = (evt.target as HTMLButtonElement).getAttribute('data-pid');
        if (positionId != "") {
            this.props.escolaridadeModel.editExistsEducational(positionId);
        }
    }

    handleDeletePosition = () => evt => {
        const positionId = (evt.target as HTMLButtonElement).getAttribute('data-pid');
        if (positionId != "") {
            this.props.escolaridadeModel.setEducationalToDelete(positionId);
        }
    }

    render() {
        const { escolaridadeModel } = this.props;
        let result = (
            <div>
                Você ainda não Registrou nenhum historico educacional.
            </div>
        );
        const educationals: IEducational[] = escolaridadeModel.getHistoryEducational();
        if (educationals !== null && educationals.length > 0) {
            const degrees = ["",
                "Ensino Fundamental",
                "Ensino Médio",
                "Ensino Superior",
                "Pós Graduação",
                "Ensino Técnico",
            ];
            result = (
                <ListGroup>
                    {educationals.map((educational) => (
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <Row>
                                    <Col md={2}>
                                        <Label>Titulo: </Label>
                                    </Col>
                                    <Col md={10}>
                                        <strong>{educational.title}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <FormGroup>
                                    <Label>Instituição:  </Label>
                                    <span>{educational.institution}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md={6}>
                                            <Label>Graduação: </Label>
                                            <span>{degrees[educational.degree]}</span>
                                        </Col>
                                        <Col md={6}>
                                            <Label>Concluido em: </Label>
                                            <span>{educational.completed ? educational.year : "Não Concluido"}</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            <Button onClick={this.handleEditButtonsOnClick()} data-pid={educational.educationalId} className="btn primary">Editar</Button>
                                        </Col>
                                        <Col md={4}>
                                            <Button onClick={this.handleDeletePosition()} data-pid={educational.educationalId} className="btn danger">Remover</Button>
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