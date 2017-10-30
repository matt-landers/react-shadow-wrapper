# react-shadow-wrapper

Wrapper componenet for ReactJS that allows you to render multiple child components without adding unnecessary DIVs to the DOM.

## Installation
```
$ npm install react-shadow-wrapper
```
## Usage

Import the component:

```typescript
import ShadowWrapper from 'react-shadow-wrapper';
```

When you render your component, wrap it in with <ShadowWrapper></ShadowWrapper>:

```tsx
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

Typically, you would need to wrap the components in a DIV, and the resulting HTML outputed would look like:

```html
<div id="app">
    <div>
        ...your components nested under the div
    </div>
</div>
```

When using ShadowWrapper, your output looks like:

```html
<div id="app">
    ...your components are no longer nested in a useless div!
</div>
```

## Example

If you're still unsure how this masterpiece works, checkout the working example here:
https://www.npmjs.com/package/react-shadow-wrapper-example
