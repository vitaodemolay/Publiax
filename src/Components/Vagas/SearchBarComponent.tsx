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
                    <div className="container-search">
                        <Form>
                            <Row>
                                <Col className="text-center">
                                    <h2 className="TitleVagasSearch">Vagas</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup className="form-content">
                                        <small>Pesquise vagas aqui</small>
                                        <Input className="input-search" onChange={this.handleInputChange} value={this.state.intputValue} />

                                        <div className="input-group-append">
                                            <Button onClick={this.handlerOnBuscarClick} className="btn-buscar">Buscar</Button>

                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </Container>
            </div>
        );
    }

    handlerOnBuscarClick = () => {
        const { vagasBuscaModel } = this.props;
        if(this.state.intputValue !== undefined && this.state.intputValue !== ''){
            vagasBuscaModel.getBuscarVagas(this.state.intputValue);
        }
        vagasBuscaModel.setResultIsVisible(true);
    }

    handleInputChange = (event) =>{
        const { vagasBuscaModel } = this.props;
        this.setState({
            intputValue: event.target.value
        });

        const valueState = event.target.value;

        vagasBuscaModel.setFilterIsNotEmpty(valueState !== undefined && valueState !== '');
    }
}