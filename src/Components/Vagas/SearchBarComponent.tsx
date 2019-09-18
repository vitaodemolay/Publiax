import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Inject, Connection } from 'exredux';
import { VagasEncontradasBuscaModel } from '../../Models/VagasEncontradasBuscaModel';
import { appModels } from '../../AppModels';

class Props {
    vagasBuscaModel: VagasEncontradasBuscaModel;
}

@Connection({
    modelStore: appModels,
    props: Props
  })

export default class SearchVagasBar extends React.Component<Props> {

    state = {
        intputValue : ''
    };

    render() {
        return (
            <div className="searchBarArea">
                <Container fluid={true}>
                    <Form>
                        <Row>
                            <Col className="text-center">
                                <h2 className="TitleVagasSearch">Vagas</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <small>Pesquise vagas aqui</small>
                                    <Input onChange={this.handleInputChange} value={this.state.intputValue} />
                                    <Button onClick={this.handlerOnBuscarClick} className="btn-buscar">Buscar</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }

    handlerOnBuscarClick = () => {
        const { vagasBuscaModel } = this.props;
        vagasBuscaModel.getBuscarVagas(this.state.intputValue);
        vagasBuscaModel.setResultIsVisible(true);
    }

    handleInputChange = (event) =>{
        this.setState({
            intputValue: event.target.value
        });
    }
}