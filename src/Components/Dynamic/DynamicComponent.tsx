import React from 'react';

class Props {
    html: any;
}

export default class Dynamic extends React.Component<Props> {
    markup(val) {
        return ({ __html: val });
    }

    render() {
        return <div dangerouslySetInnerHTML={this.markup(this.props.html)} />;
    }
}