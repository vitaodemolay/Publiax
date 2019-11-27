import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import SidebarComponent from './Sidebar';
import BoxFormsComponent from './BoxForms';

export default class VitrineComponent extends React.Component {
    render() {
        return (
            <Container className="container-curriculum">
                 <Container className="container box-content">
                    <Row>
                        <Col lg='4' className="sidebar">
                            <SidebarComponent/>
                        </Col>
                        <Col sm='8'>
                            <BoxFormsComponent/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}