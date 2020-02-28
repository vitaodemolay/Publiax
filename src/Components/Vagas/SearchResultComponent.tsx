import React from 'react';
import { Card, CardHeader, CardBody, Container } from 'reactstrap';
import { VagaTools } from '../../Models/VagaTools';
import { IVaga } from '../../Service/Interfaces/IVaga';

interface Props {
    vagas: IVaga[];
}

export default class SearchResult extends React.Component<Props> {
    
    defineUrlAddress(id: string){
        return `#/vagadetalhe/${id}`;
    }
    
    render() {
        const { vagas } = this.props;
        const isNotFound = (vagas === undefined || vagas.length === 0);
        return (
            <Container>
                <CardHeader className="text-center">
                    <h2>Resultado da Pesquisa de Vagas</h2>
                </CardHeader>
                <CardBody>
                    {isNotFound && 
                        <div>
                            <strong>
                                Nenhum resultado encontrado para o filtro informado.
                            </strong>
                        </div>
                    }

                    {!isNotFound && 
                        <table className="table">
                        <tbody>
                            {vagas.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.titulo}</td>
                                    <td>{VagaTools.getPublicacaoToString(item.publicacao)}</td>
                                    <td><a className="btn_default" href={this.defineUrlAddress(item.id)}>Detalhe</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    }
                </CardBody>
            </Container>
        );
    }
}