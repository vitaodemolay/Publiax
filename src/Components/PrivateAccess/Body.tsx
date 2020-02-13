import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class BodyComponent extends React.Component {
    render() {
        return (
            <Container className="box-logar box-container">
                    <p>Para o acesso a este conteudo é necessário que você faça Login!</p>
                    <p>Clique no botão baixo para realizar o login e tenha acesso total ao portal</p>
                    <Link to="/login" className="btn-logar">Para Logar Clique Aqui</Link>
            </Container>
        );
    }
}