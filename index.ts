import * as React from 'react';

class ShadowWrapper extends React.Component {
    props: any;

    render() {
        return (this.props.children)
    }
}

export default ShadowWrapper;