import React from "react";
import { Inject, Connection } from 'exredux';
import { appModels } from "../../AppModels";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Spinner } from "reactstrap";
import { DadosPessoaisModel } from "../../Models/DadosPessoaisModel";

class Props {
    @Inject dadosPessoais?: DadosPessoaisModel;
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
        const { dadosPessoais } = this.props;
        if (dadosPessoais.isCompleted)
            return (
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <span className="lnr lnr-user"></span>
                        <span>{dadosPessoais.input.login}</span>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Notificações
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