import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { appModels } from '../../AppModels';
import { AuthModel } from '../../Models/AuthModel';
import { Inject, Connection } from 'exredux';

class Props {
    @Inject auth: AuthModel;
}

@Connection({
    modelStore: appModels,
    props: Props
})

class Menu extends React.Component<Props> {
    render() {
        const { auth } = this.props;
        return (
            <div className="navigation">
                <Navbar className="navbar navbar-fixed-top">
                    <NavbarBrand href="/" className="site-logo" />
                    <Nav>
                        <NavItem>
                            <NavLink href="#/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/vagas">Vagas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/quemsomos">Quem Somos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/contato">Contato</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="btn-cadastro" href="#/curriculum">Cadastrar Curriculum</NavLink>
                        </NavItem>
                        <NavItem>
                            {auth.isAuthenticated()
                                ? <NavLink className="btn-entrar" href="#/logout">Sair</NavLink>
                                : <NavLink className="btn-entrar" href="#/login">Entrar</NavLink>
                            }

                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Menu;