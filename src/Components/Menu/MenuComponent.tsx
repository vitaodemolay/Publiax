import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

class Menu extends React.Component {
    render() {
        return (
            <div className="navigation">
                <Navbar className="navbar navbar-fixed-top">
                    <NavbarBrand href="/" className="site-logo"/>
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
                            <NavLink className="btn-entrar" href="#/login">Entrar</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Menu;