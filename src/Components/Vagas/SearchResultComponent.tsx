import React from 'react';
import { Card, CardHeader, CardBody, Container } from 'reactstrap';
import { IVagasResult } from '../../Service/Interfaces/IVagasResult';
import { VagaTools } from '../../Models/VagaTools';

interface Props {
    vagas: IVagasResult;
}

export default class SearchResult extends React.Component<Props> {
    render() {
        const { vagas } = this.props;
        return (
            <Container>
                <Card>
                    <CardHeader className="text-center">
                        <h2>Resultado da Pesquisa de Vagas</h2>
                    </CardHeader>
                    <CardBody>
                        <table className="table">
                            <tbody>
                                {vagas.data.map((item, index) => (
                                    <tr key={index}>
                                        <td><a href={item.url} >{item.descricao}</a></td>
                                        <td>{VagaTools.getPublicacaoToString(item.publicacao)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}