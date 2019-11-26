import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import VitrineComponent from '../QuemSomos/Vitrine';
import { render } from 'react-dom';


export default className VitrineComponent extends React.Component {
    render() {
        return (
            <div className="container-curriculum">
                 <div classNameName="container box-content">
    <div classNameName="row">
      <div classNameName="sidebar col-lg-4">
        <div classNameName="container-sidebar">
          <div classNameName="list-group">
            <h1 classNameName="my-4">Cúrriculo</h1>
            <a href="#" classNameName="list-group-item">Dados Pessoas</a >
            <a href="#" classNameName="list-group-item">Dados Profissionais</a>
            <a href="#" classNameName="list-group-item">Escolaridade</a>
            <a href="#" classNameName="list-group-item">Informática</a>
            <a href="#" className="list-group-item">Línguas Estrangeiras</a>
            <a href="#" className="list-group-item">Outras Informações</a>
            <a href="#" className="list-group-item">Carta de Apresentação</a>
          </div>
          <div class="list-group">
            <a href="#" className="list-group-item">Visualizar</a>
            <a href="#" className="list-group-item">Imprimir</a>
          </div>
          <div class="list-group">
            <h1 class="my-4">Minha Conta</h1>
            <a href="#" className="list-group-item">Curriculo</a>
            <a href="#" className="list-group-item">Avisos</a>
            <a href="#" className="list-group-item">Participações</a>
            <a href="#" className="list-group-item">Configurações</a>
          </div>
        </div>
      </div>
      <div className="box-form col-sm-8">
        <h2>Dados Pessoais</h2>
          <hr/>

          <div className="signup-content">
            <div className="form-group">
              <label for="exampleInputEmail1">Nome Completo</label>
              <input type="text" className="form-control" placeholder="Nome Completo" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Nome Social</label>
              <input type="text" className="form-control" placeholder="Nome Social" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">CPF</label>
              <input type="text" className="form-control" placeholder="CPF" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">RG</label>
              <input type="password" className="form-control" placeholder="RG" />
            </div>
            <div className="row">
              <div className="form-group col-md-4">
                <label for="inputCity">Estado Emissor RG</label>
                <select id="inputState" className="form-control">
                  <option selected>Escolha...</option>
                  <option>...</option>
                </select >
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">Orgão Emissor</label>
                <select id="inputState" className="form-control" >
                  <option selected>Escolha...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label for="inputZip">Data Nascimento</label>
                <select id="inputState" className="form-control" >
                  <option selected>Escolha...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Selecione seu Sexo</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Estado Civil</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <h2>Endereços</h2>
              <hr />
              <div className="form-group">
                <label for="exampleInputEmail1">Endereço</label>
                <input type="email" className="form-control" placeholder="Endereço" />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">CEP</label>
                <input type="email" className="form-control" placeholder="CEP" />
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label for="inputCity">Numero</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-8">
                  <label for="inputState">Complemento</label>
                  <input type="text" className="form-control" />

                </div>

              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Bairro</label>
                <input type="email" className="form-control" />
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label for="inputCity">Cidade</label>
                  <select id="inputState" className="form-control">
                    <option selected>Escolha...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-8">
                  <label for="inputState">Estado</label>
                  <select id="inputState" className="form-control">
                    <option selected>Escolha...</option>
                    <option>...</option>
                  </select>
                </div>

              </div>
          </div>
          <button className="btn btn-primary">SALVAR</button>
      </div>
    </div>
  </div>
            </div>
        );
    }
}