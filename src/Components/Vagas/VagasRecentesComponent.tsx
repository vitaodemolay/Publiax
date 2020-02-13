import React from 'react';
import { Card, CardHeader, CardBody, Container, Button } from 'reactstrap';
import { VagaTools } from '../../Models/VagaTools';
import { IVaga } from '../../Service/Interfaces/IVaga';


interface Props {
    vagas: IVaga[];
}

export default class VagasRecentes extends React.Component<Props> {

    defineUrlAddress(id: string){
        return `#/vagadetalhe/${id}`;
    }

    render() {
        const { vagas } = this.props;
        return (
            <Container>
                <div className="box-container">
                    <h3>Vagas Recentes</h3>
                    <table className="table container-vagas">
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

                </div>
            </Container>
        );
    }
}