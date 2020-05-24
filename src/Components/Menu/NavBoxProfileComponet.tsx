import React from "react";
import { Inject, Connection } from 'exredux';
import { appModels } from "../../AppModels";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class Props {

}

@Connection({
    modelStore: appModels,
    props: Props
})

class NavBoxProfile extends React.Component<Props> {
    render(){
        return(
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Usuário <span className="lnr lnr-user"></span>
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
    }
}

export default NavBoxProfile;