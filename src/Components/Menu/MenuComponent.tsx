import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { appModels } from '../../AppModels';
import { AuthModel } from '../../Models/AuthModel';
import { Inject, Connection } from 'exredux';
import myFunction from '../../js/script';

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
                <Navbar className="navbar navbar-fixed-top topnav">
                    <NavbarBrand href="/" className="site-logo" />
                    {/*<a href="javascript:void(0);" className="icon" onClick={myFunction}></a>*/}

                    <Nav id="myLinks">
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
                            <NavLink href="#/curriculum" className="btn-cadastro">Cadastrar Currículo</NavLink>
                        </NavItem>
                        <NavItem>
                            {auth.isAuthenticated()
                                ? <NavLink className="btn-entrar" href="#/logout">Sair</NavLink>
                                : <NavLink className="btn-entrar" href="#/login">Entrar</NavLink>
                            }
                        </NavItem>
                    </Nav>

                </Navbar>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/vagas">Vagas</a></li>
                    <li><a href="#/quemsomos">Quem Somos</a></li>
                    <li><a href="#/contato">Contato</a></li>
                    <li><a href="#/curriculum" className="btn-cadastro">Cadastrar Currículo</a></li>

                    <li>
                        {auth.isAuthenticated()
                            ? <NavLink className="btn-entrar" href="#/logout">Sair</NavLink>
                            : <NavLink className="btn-entrar" href="#/login">Entrar</NavLink>

                        }
                    </li>
                    <li>
                    </li>

                </ul>

        </div>

        );
    }
}

export default Menu;
