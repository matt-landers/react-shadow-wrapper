# react-shadow-wrapper

Wrapper componenet for ReactJS that allows you to render multiple child components without adding unnecessary DIVs to the DOM.

## Installation

    npm install react-shadow-wrapper


## Usage

Import the component:

```
    import ShadowWrapper from 'react-shadow-wrapper';
```

When you render your component, wrap it in with <ShadowWrapper></ShadowWrapper>:

```
class YourComponent extends React.Component {
    render() {
        return (
            <ShadowWrapper>
                <YourOtherComponent1 />
                <YourOtherComponent2 />
                ...anything you want...
            </ShadowWrapper>
        );
    }
}
```

