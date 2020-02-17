import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Spinner, ListGroup, Row, Col, Label, ListGroupItem } from 'reactstrap';
import { VisualizaCvModel } from '../../../Models/VisualizaCvModel';
import { appModels } from '../../../AppModels';
import Dynamic from '../../Dynamic/DynamicComponent';
import moment from 'moment';

class Props {
    @Inject visualizaCvModel: VisualizaCvModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class VisualizarComponent extends React.Component<Props> {
    componentDidMount() {
        this.loadFields();
    }

    loadFields() {
        const { visualizaCvModel } = this.props;
        visualizaCvModel.getResumeFullOnSource();
    }

    getPhisicalDisabilityDescription(value: number, complement: string) {
        let result = "";
        switch (value) {
            case 1:
                result = "Visual";
                break;
            case 2:
                result = "Auditiva";
                break;
            case 3:
                result = "Fala";
                break;
            case 4:
                result = "Física";
                break;
            case 5:
                result = "Intelectual";
                break;
            case 6:
                result = "Multipla";
                break;
            default:
                result = "Nenhuma";
                break;
        }

        if (complement !== undefined && complement !== null && complement !== "") {
            result = `${result}: ${complement}`
        }

        return result;
    }

    getAge(birthday) {
        if (birthday == undefined || birthday == null || birthday == "") {
            return "";
        }

        const _birthday = new Date(birthday);
        let calc = moment().diff(_birthday, 'years');

        return `${calc} Anos`;
    }

    render() {
        const { visualizaCvModel } = this.props;
        const data = visualizaCvModel.input;
        const degrees = ["",
            "Ensino Fundamental",
            "Ensino Médio",
            "Ensino Superior",
            "Pós Graduação",
            "Ensino Técnico",
        ];
        const levels = ["",
            "Nível Básico",
            "Nível Intermediário",
            "Nível Avançado",
        ];
        return (
            <React.Fragment>
                {visualizaCvModel.isLoading && <Spinner animation="border" variant="primary" />}
                {visualizaCvModel.isFailed && <div>Falhou!</div>}
                {visualizaCvModel.isCompleted &&
                    <div>
                        <Container id="register-details" className="">
                            <h2>Curriculum</h2>
                            <ListGroup style={{ paddingTop: 30 }}>
                                <h3>{data.userData.name}</h3>
                                <div style={{ paddingTop: 30 }}>

                                    <h4>Apresentação</h4>
                                    <ListGroupItem>
                                        <Row>
                                            <Col md={12}>
                                                <Dynamic html={data.presentationLetter} />
                                            </Col>
                                        </Row>
                                    </ListGroupItem>

                                    <h4>Dados Pessoais</h4>
                                    <ListGroupItem>
                                        <Row>
                                            <Col md={4}>
                                                <Label>Email:</Label>
                                            </Col>
                                            <Col md={8}>
                                                <span>{data.userData.email}</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <Label>Celular:</Label>
                                            </Col>
                                            <Col md={8}>
                                                <span>{data.userData.celphone}</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <Label>Idade:</Label>
                                            </Col>
                                            <Col md={8}>
                                                <span>{this.getAge(data.userData.birthday)}</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <Label>Deficiencia:</Label>
                                            </Col>
                                            <Col md={8}>
                                                <span>{this.getPhisicalDisabilityDescription(data.userData.physicalDisability,
                                                    data.userData.disabilityAdditionalDescription)}</span>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>

                                    <h4>Escolaridade</h4>
                                    <ListGroupItem>
                                        {data.educationals.map((educational) => (
                                            <React.Fragment>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>{degrees[educational.degree]}:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{educational.title}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Instituição:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>
                                                            {educational.institution}
                                                        </span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Situação:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>
                                                            {educational.completed ? `Concluido em ${educational.year}` : `Incompleto`}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </React.Fragment>
                                        ))}
                                    </ListGroupItem>

                                    <h4>Histórico Profissional</h4>
                                    <ListGroupItem>
                                        {data.positions.map((position) => (
                                            <React.Fragment>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Empresa: </Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{position.title}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Resumo:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{position.summary}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Periodo:</Label>
                                                    </Col>
                                                    <Col>
                                                        <span>
                                                            {!position.actual ? `A partir de: ${position.startIn} Até: ${position.endIn}` : `A partir de: ${position.startIn} (ocupação atual)`}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </React.Fragment>
                                        ))}
                                    </ListGroupItem>

                                    <h4>Outras Qualificações</h4>
                                    <ListGroupItem>
                                        {data.skills.map((skill) => (
                                            <React.Fragment>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Qualificação:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{skill.description}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Nível:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{levels[skill.level]}</span>
                                                    </Col>
                                                </Row>
                                            </React.Fragment>
                                        ))}
                                    </ListGroupItem>

                                    <h4>Linguas Estrangeiras</h4>
                                    <ListGroupItem>
                                        {data.languages.map((language) => (
                                            <React.Fragment>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Idioma:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{language.description}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Label>Nível:</Label>
                                                    </Col>
                                                    <Col md={8}>
                                                        <span>{levels[language.level]}</span>
                                                    </Col>
                                                </Row>
                                            </React.Fragment>
                                        ))}
                                    </ListGroupItem>
                                </div>

                            </ListGroup>
                        </Container>
                    </div>
                }
            </React.Fragment>
        );
    }
}