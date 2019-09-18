import React from 'react';

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
                    <img src="src/img/3.jpg" className="img-responsive" />
                </div>
            </div>
        );
    }
}
