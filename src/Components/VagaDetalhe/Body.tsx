import React, { useState } from 'react';
import { IVaga } from '../../Service/Interfaces/IVaga';
import { Container, Col, Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import Dynamic from '../Dynamic/DynamicComponent';
import { VagaTools } from '../../Models/VagaTools';

class Props {
    vaga: IVaga;
}

export default class VagaDetalheBody extends React.Component<Props>{

    render() {

        const { vaga } = this.props;
        return (
            <Container className="content-vagas">
                <Card>
                    <CardHeader className="text-center" >
                        <h3>{vaga.titulo}</h3>
                    </CardHeader>
                    <CardBody>
                        <Dynamic html={vaga.descricao} />
                    </CardBody>
                    <CardFooter>
                        <p>
                            <strong>Publicado Em: </strong>
                            <span>{VagaTools.getPublicacaoFormat(vaga.publicacao)}</span>
                        </p>
                    </CardFooter>
                </Card>
            </Container>
        );
    }
}