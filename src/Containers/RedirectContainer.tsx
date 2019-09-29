import { Redirect } from 'react-router';
import React from 'react';

export default class RedirectContainer extends React.Component{
    
    render() {
        let address = '/';
        if(this.props.children != undefined){
            address = this.props.children.toString();
        } 
        return (
            <Redirect to={address} />
        );
    }
}