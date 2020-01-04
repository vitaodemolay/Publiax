import React from 'react';

const imgBackground = require("../../img/3.jpg");

export default class Jumbo extends React.Component {
    render() {
        return (
            <div id="home">
                <div className="content-home">
                    <h1>Nunca foi tão fácil </h1>
                    <h2>Conseguir um trabalho</h2>
                    <a href="#" className="btn-vervagas">Ver vagas</a>
                </div>
                <div className="slider">
                    <img src={imgBackground} className="img-responsive" />
                </div>
            </div>
        );
    }
}
