import React, { useState } from 'react';
import { IVaga } from '../../Service/Interfaces/IVaga';
import { Modal, Button } from 'reactstrap';

class Props {
    vaga: IVaga;
}

export default class VagaDetalhe extends React.Component<Props>{

    render() {
       
        const { vaga } = this.props;
        return (
            <div>
                l
            </div>
        );
    }
}