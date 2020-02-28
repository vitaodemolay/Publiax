import React, { useState } from 'react';
import { IVaga } from '../../Service/Interfaces/IVaga';
import { Container, Col, Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import Dynamic from '../Dynamic/DynamicComponent';
import { VagaTools } from '../../Models/VagaTools';
import { IJobSubscription } from '../../Service/Interfaces/IJobSubscription';

class Props {
    vaga: IVaga;
    inscricao?: IJobSubscription
}

export default class VagaDetalheBody extends React.Component<Props>{

    render() {

        const { vaga, inscricao } = this.props;
        return (
            <Container className="box-container">
                    <h3>{vaga.titulo}</h3>
                    <div className="text-description">
                        <Dynamic html={vaga.descricao} />
                    </div>
                    <div className="publicad-data">
                        <p>
                            <strong>Publicado Em: </strong>
                            <span>{VagaTools.getPublicacaoFormat(vaga.publicacao)}</span>
                        </p>

                        {(inscricao != null && inscricao != undefined && inscricao.isSubscribe) && (
                            <p>
                                <strong>Inscrito na vaga em: </strong>
                                <span>{VagaTools.getPublicacaoFormat(inscricao.subscriptionDate)}</span>
                            </p>
                        )}
                    </div>
            </Container>
        );
    }
}