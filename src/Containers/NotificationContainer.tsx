import React from 'react';
import { Connection, Inject } from 'exredux';
import { appModels } from '../AppModels';
import HeaderComponent from '../Components/Notificacoes/Header';
import VitrineComponent from '../Components/Notificacoes/Vitrine';
import { NotificationModel } from '../Models/NotificationModel';


class Props {
    @Inject notifications : NotificationModel
}

@Connection({
    modelStore: appModels,
    props: Props
})

export default class NotificationContainer extends React.Component<Props> {
    componentDidMount() {
        this.loadFields();
    }

    loadFields() {
        const { notifications } = this.props;
        notifications.getNotificationOnSource();
    }

    render() {
        return (
            <div>
                <HeaderComponent>Notificações</HeaderComponent>
                <VitrineComponent/>
            </div>
        );
    }
}