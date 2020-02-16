import React from 'react';
import { Inject, Connection } from 'exredux';
import { Container, Spinner, ListGroup, Row, Col, Label } from 'reactstrap';
import { VisualizaCvModel } from '../../../Models/VisualizaCvModel';
import { appModels } from '../../../AppModels';
import { IResume } from '../../../Service/Interfaces/IResume';

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

    render() {
        const { visualizaCvModel } = this.props;
        const data = visualizaCvModel.input;
        return (
            <React.Fragment>
                {visualizaCvModel.isLoading && <Spinner animation="border" variant="primary" />}
                {visualizaCvModel.isFailed && <div>Falhou!</div>}
                {visualizaCvModel.isCompleted &&
                    <div>
                        <Container id="register-details" className="">
                            <h2>Curriculum</h2>
                            <ListGroup>
                                <h3>{data.userData.name}</h3>
                                <hr />
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

                            </ListGroup>
                        </Container>
                    </div>
                }
            </React.Fragment>
        );
    }
}