import { ReactComponent } from 'react';

class ShadowWrapper extends ReactComponent {
    props: any;

    render() {
        return (this.props.children)
    }
}

export default ShadowWrapper;