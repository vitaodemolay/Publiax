import React from 'react';
import { Connection } from 'exredux';
import { appModels } from '../AppModels';
import HeaderComponent from '../Components/Curriculum/Header';
import VitrineComponent from '../Components/Curriculum/Vitrine';


class Props {

}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class CurriculumContainer extends React.Component<Props> {
    render() {
        return (
            <div>
                <HeaderComponent>Cadastre Seu currículo</HeaderComponent>
                <VitrineComponent/>
            </div>
        );
    }
}
