import React from 'react';


export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="CurriculumHeader">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}