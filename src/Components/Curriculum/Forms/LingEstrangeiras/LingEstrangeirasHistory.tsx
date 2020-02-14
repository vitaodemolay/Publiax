import React from "react";
import { LingEstrangeirasModel } from "../../../../Models/LingEstrangeirasModel";
import { ISkill } from "../../../../Service/Interfaces/ISkill";
import { ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col, Label, FormGroup, ListGroupItemText, Button } from "reactstrap";

interface Props {
    lingEstrangeirasModel: LingEstrangeirasModel
}

export default class HistoryLingEstrangeiras extends React.Component<Props> {

    handleEditButtonsOnClick = () => evt => {
        const skillId = (evt.target as HTMLButtonElement).getAttribute('data-pid');
        if (skillId != "") {
            this.props.lingEstrangeirasModel.editExistsLaguageSkill(skillId);
        }
    }

    handleDeleteSkill = () => evt => {
        const skillId = (evt.target as HTMLButtonElement).getAttribute('data-pid');
        if (skillId != "") {
            this.props.lingEstrangeirasModel.setLanguageSkillToDelete(skillId);
        }
    }

    render() {
        const { lingEstrangeirasModel } = this.props;
        let result = (
            <div>
                Você ainda não Registrou nenhum historico de idiomas.
            </div>
        );
        const skills: ISkill[] = lingEstrangeirasModel.getHistoryLanguageSkill();
        if (skills !== null && skills.length > 0) {
            const levels = ["",
                "Nível Básico",
                "Nível Intermediário",
                "Nível Avançado",
            ];
            result = (
                <ListGroup>
                    {skills.map((skill) => (
                        <ListGroupItem>
                            <ListGroupItemHeading>
                                <Row>
                                    <Col md={2}>
                                        <Label>Idioma: </Label>
                                    </Col>
                                    <Col md={10}>
                                        <strong>{skill.description}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                                <FormGroup>
                                    <Label>Nível de Conhecimento: </Label>
                                    <span>{levels[skill.level]}</span>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md={2}>
                                            <Button onClick={this.handleEditButtonsOnClick()} data-pid={skill.skillId} className="btn primary">Editar</Button>
                                        </Col>
                                        <Col md={4}>
                                            <Button onClick={this.handleDeleteSkill()} data-pid={skill.skillId} className="btn danger">Remover</Button>
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