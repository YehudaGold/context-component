
# test ContextComponent

this project uses ContextComponent package, and show examples of usage for testing

## run

to open the react app run

```
npm start
```

# ContextComponent

ContextComponent is aimed at reducing the boilerplate of writing flexible centralized state management with React context.

ContextComponent provide extendable React class that automatically connect it's state and method's to a context and provide it to his children's.
and expose api to easily consume the context by `connect` HOC (similar to react-redux) or by React regular context api method's - `Consumer`, `contextType`, `useContext`.

To learn more on context - [react context documentation](https://reactjs.org/docs/context.html)

## Basic usage

### Creating ContextComponent

To creating ContextComponent create component that extends `ContextComponent` with state and method's you want to share in you app:

ThemeContext.jsx
```jsx
import ContextComponent from 'ContextComponent';

export default class ThemeContext extends ContextComponent {

    state = {theme: 'dark'}

    toggleTheme = () => {
        this.setState(state => (state.theme === 'dark' ? {theme: 'light'} : {theme: 'dark'}));
    }

}
```

The ContextComponent implement for you a `render` methods that render the `this.componentContext.Provider` with the component state and instance method's as value.

You can use React lifecycle method's to initialize the state and manipulate it.

All non React lifecycle method's are provided by the context automatically, but you can override this by adding `actions` property to the class with the method's you want to provide.

### Providing ContextComponent

To provide the context to the React tree you render the component:

App.jsx
```jsx
import React from 'react';
import ThemeContext from './ThemeContext';

export const App = () => (
    <ThemeContext>
        <otherComponent />
    </ThemeContext>;
);

```

### Consuming ContextComponent

To consume the context you can connect to it with the context class static `connect` HOC method:

otherComponent.jsx
```jsx
import React from 'react';
import ThemeContext from './ThemeContext';

const otherComponent = ({toggleTheme, theme}) =>
    <div className={theme} onClick={toggleTheme} />;

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default ThemeContext.connect(mapStateToProps, mapActionToProps)(otherComponent);
```
The class `connect` HOC takes tree optional parameters:

* mapStateToProps - callback with two parameters `state` and `ownProps` and return object of props, enabling you to transform rename and pick the relevant values from the context.
* mapActionToProps - callback with two parameters `actions` and `ownProps` and return object of props, enabling you to transform rename and pick the relevant method's from the context.
* options - options object with the keys:
    * memo - memorize the component to not rerender if there aren't changes to props or context (shallow compare), defaulted to true.
    * forwardRef - forward the ref prop to the WrappedComponent ref, defaulted to false.
---

Or consuming the context by rendering the `ContextComponent.Consumer`:
```jsx
import React from 'react';
import ThemeContext from './ThemeContext';

export const otherComponent = () => (
    <ThemeContext.Consumer>
        {context =>
            <div className={context.state.theme} onClick={context.actions.toggleTheme} />
        }
    </ThemeContext.Consumer>
);
```
---

Or by using the React class component `contextType` property:
```jsx
import React, {Component} from 'react';
import ThemeContext from './ThemeContext';

export class otherComponent extends Component {

    static contextType = ThemeContext.componentContext;

    render() {
        const {actions, state} = this.context;

        return <div className={context.state.theme} onClick={context.actions.toggleTheme} />
    }

}
```
---

Or by using the `useContext()` hook:
```jsx
import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

export const otherComponent = () => {
    const {actions, state} = useContext(ThemeContext.componentContext);

    return <div className={context.state.theme} onClick={context.actions.toggleTheme} />;
};

```

## Multiple contexts

You can use the `Provider` component to provide multiple contexts together:

App.jsx
```jsx
import React from 'react';
import {Provider} from 'ContextComponent';
import ThemeContext from './ThemeContext';
import CounterContext from './CounterContext';

export const App = () => (
    <Provider ContextComponents={[CounterContext, ThemeContext]}>
        <otherComponent />
    </Provider>;
);
```
The `Provider` require ContextComponents prop - the ContextComponent classes array.

---

And you can consume them together with `connect` HOC:

otherComponent.js
```jsx
import React from 'react';
import {connect} from 'ContextComponent';
import ThemeContext from './ThemeContext';
import CounterContext from './CounterContext';

const otherComponent = ({toggleTheme, increase, counter, theme}) =>
    <div>
        <div className={theme} onClick={toggleTheme} />
        <div onClick={increase} > {counter} </div>
    </div>;

const mapStateToProps = ([counterContext, themeContext]) => ({
    counter: counterContext.counter,
    theme: themeContext.theme
});

const mapActionToProps = ([counterContext, themeContext]) => ({
    increase: counterContext.increase,
    toggleTheme: themeContext.toggleTheme
});

export default connect([CounterContext, ThemeContext], mapStateToProps, mapActionToProps)(otherComponent);
```
The `connect` HOC takes array of context class, and takes tree optional parameters:

* mapStateToProps - callback with two parameters `state[]` and `ownProps` and return object of props, enabling you to transform rename and pick the relevant values from the context.
* mapActionToProps - callback with two parameters `actions[]` and `ownProps` and return object of props, enabling you to transform rename and pick the relevant method's from the context.
* options - options object with the keys:
    * memo - memorize the component to not rerender if there aren't changes to props or context (shallow compare), defaulted to true.
    * forwardRef - forward the ref prop to the WrappedComponent ref, defaulted to false.

## Optimization warning

The mapStateToProps and mapActionToProps callbacks shouldn't return new object reference on recurring equal input's for component memorization to work, if you computing new value like:
```js
const mapStateToProps = (state) => ({theme: {color: state.theme}});
```
the theme object reference will always return a new object and the React.memo shallow equality check will fail, and the component will rerender.

For solving this use memorization technique:
```js
let lastTheme, value;
const mapStateToProps = (state) => {
    if (state.theme === lastTheme) return value;
    lastTheme = state.theme;
    value = {theme: {color: state.theme}};
    return value;
}
// For this you can use memorization package like 'memoize-one'.
```
or set the connect options.memo to false and not memorize the component.