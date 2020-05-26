import React from "react";
import { Inject, Connection } from 'exredux';
import { appModels } from "../../AppModels";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Spinner, Badge } from "reactstrap";
import { DadosPessoaisModel } from "../../Models/DadosPessoaisModel";
import { NotificationModel } from "../../Models/NotificationModel";

class Props {
    @Inject dadosPessoais?: DadosPessoaisModel;
    @Inject notifications?: NotificationModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

class NavBoxProfile extends React.Component<Props> {
    componentDidMount() {
        this.loadFields();
    }

    loadFields() {
        const { dadosPessoais } = this.props;
        dadosPessoais.getUserDataOnSource();
    }

    render() {
        const { dadosPessoais, notifications } = this.props;

        if (dadosPessoais.isCompleted)
            return (
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <span className="lnr lnr-user"></span>
                        <span>{dadosPessoais.input.login}</span>
                        {notifications.hasUnreadedNotification()
                            ? <Badge color="danger"><span className="lnr lnr-envelope"></span></Badge>
                            : <React.Fragment />
                        }
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Notificações
                            {notifications.hasUnreadedNotification()
                                ? <Badge color="danger">{notifications.getCountUnreadedNotification()}</Badge>
                                : <React.Fragment />
                            }
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#/logout">
                            Sair
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            )

        if (dadosPessoais.isLoading)
            return (
                <NavItem>
                    <Spinner animation="border" variant="secondary" />
                </NavItem>
            )

        else
            return (
                <NavItem>
                    <span>Erro!</span>
                </NavItem>
            )
    }
}

export default NavBoxProfile;