import React from 'react';
import Jumbo from './JumboComponent';
import About from './AboutComponent';
import Works from './WorksComponent';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbo />
                <About />
                <Works />
            </div>
        );
    }
}
