import React from 'react';
import { Inject, Connection } from 'exredux';
import RichTextEditor from 'react-rte';
import { Container, Form, FormGroup, Label, Input, Button, Alert, Spinner } from 'reactstrap';
import { CartaApresentacaoModel } from '../../../Models/CartaApresentacaoModel';
import { appModels } from '../../../AppModels';

class Props {
    @Inject cartaApresentacaoModel: CartaApresentacaoModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class CartaApresentacaoComponent extends React.Component<Props> {

    private fieldName = "presentationLetter";

    componentDidMount() {
        this.loadFields();
    }

    loadFields() {
        const { cartaApresentacaoModel } = this.props;
        cartaApresentacaoModel.getPresentationLetterDataOnSource();
    }

    onChange = (value) => {
        this.props.cartaApresentacaoModel.doFieldUpdate(this.fieldName, value);
    }

    render() {
        const { cartaApresentacaoModel } = this.props;
        return (
            <div>
                {cartaApresentacaoModel.isLoading && <div>Carregando...</div>}
                {cartaApresentacaoModel.isFailed && <div>Falhou!</div>}
                {cartaApresentacaoModel.isCompleted &&

                    <Form id="register-details" className="">
                        <h2>Carta de Apresentação</h2>
                        <hr />
                        <Container className="signup-content">
                            <div>
                                {cartaApresentacaoModel.isError() &&
                                    <Alert color="danger">
                                        <span>{cartaApresentacaoModel.getErrorMessage()}</span>
                                    </Alert>
                                }
                            </div>
                            <FormGroup>
                                <Label for="exampleText">Digite sua carta de apresentação</Label>
                                <RichTextEditor
                                    value={cartaApresentacaoModel.input[this.fieldName]}
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                        </Container>
                        <div>
                            {cartaApresentacaoModel.isSaving() &&
                                <Spinner animation="border" variant="secondary" />
                            }
                            {!(cartaApresentacaoModel.isSaving()) &&
                                <Button className="btn btn-primary" onClick={cartaApresentacaoModel.updateDataSource}>SALVAR</Button>
                            }
                        </div>
                    </Form>
                }
            </div>
        );
    }
}