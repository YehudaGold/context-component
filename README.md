
# test ContextComponent

this project uses ContextComponent package, and show examples of usage for testing

## run

to open the react app run

```
npm start
```

# ContextComponent

ContextComponent is aimed at reducing the boilerplate of writing flexible centralized state management with React context.

ContextComponent provide extendable React class that automatically assign it's state and method's to context and provide it to his children's, and expose api to easily consume the context by `connect` HOC or by React regular context api method's - `Consumer`, `contextType`, `useContext`.

To learn more on context - [react context documentation](https://reactjs.org/docs/context.html)

## Basic usage

### Creating ContextComponent

To creating ContextComponent create component that extends `ContextComponent` with state and method's you want to share in your app:

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

Method's defined on the ContextComponent are provided by the context automatically, except for React lifecycle method's and method's starting with '_'. You can override this by adding `actions` property to the class with the method's you want to provide.

You can use React lifecycle method's in ContextComponent to initialize and manage the state.

### Providing ContextComponent

To provide the context to the React tree you render the component:

App.jsx
```jsx
import React from 'react';
import ThemeContext from './ThemeContext';

export const App = () => (
    <ThemeContext>
        <otherComponent />
    </ThemeContext>
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

const mapContextToProps = context =>
    ({theme: context.theme, toggleTheme: context.toggleTheme});

export default ThemeContext.connect(otherComponent, mapContextToProps);
```
The class `connect` HOC takes three parameters:
* WrappedComponent - The component to connect.
* mapContextsToProps - Callback with two parameters `context[]` and `ownProps`, and return object of props.
Enabling you to transform rename and pick the relevant values from the context.
* options - Optional object with the keys:
    * memo - Memorize the component to not rerender if there aren't changes to props or context.
    Boolean or function value, defaulted to true (shallow equally check), can be set to a custom equally check.
    * forwardRef - Forward the ref prop to the WrappedComponent ref. Boolean value defaulted to 'false'.
---

Or consuming the context by rendering the `ContextComponent.Consumer`:
```jsx
import React from 'react';
import ThemeContext from './ThemeContext';

export const otherComponent = () => (
    <ThemeContext.Consumer>
        {({theme, toggleTheme}) =>
            <div className={theme} onClick={toggleTheme} />
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
        const {theme, toggleTheme} = this.context;

        return <div className={theme} onClick={toggleTheme} />;
    }

};
```
---

Or by using the `useContext()` hook:
```jsx
import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

export const otherComponent = () => {
    const {theme, toggleTheme} = useContext(ThemeContext.componentContext);

    return <div className={theme} onClick={toggleTheme} />;
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
    </Provider>
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

const otherComponent = ({counter, increase, theme, toggleTheme}) =>
    <div>
        <div className={theme} onClick={toggleTheme} />
        <div onClick={increase}> {counter} </div>
    </div>;

const mapContextsToProps = ([counterContext, themeContext]) => ({
    counter: counterContext.counter,
    increase: counterContext.increase,
    theme: themeContext.theme,
    toggleTheme: themeContext.toggleTheme
});

export default connect(otherComponent, [CounterContext, ThemeContext], mapContextsToProps);
```
The `connect` HOC takes four parameters:
* WrappedComponent - The component to connect.
* ContextComponents - Array of contextComponent classes.
* mapContextsToProps - Callback with two parameters `context[]` and `ownProps`, and return object of props.
Enabling you to transform rename and pick the relevant values from the context.
* options - Optional object with the keys:
    * memo - Memorize the component to not rerender if there aren't changes to props or context.
    Boolean or function value, defaulted to true (shallow equally check), can be set to a custom equally check.
    * forwardRef - Forward the ref prop to the WrappedComponent ref. Boolean value defaulted to 'false'.

## Optimization warning

The connect mapContextToProps callback shouldn't return new object reference on recurring equal input's for component memorization to work, if you computing new value like:
```js
const mapContextToProps = (context) =>
    ({theme: {color: context.theme}});
```
the theme object reference will always return a new object and the React.memo default shallow equality check will fail, which means the component will rerender with the same props.

For solving this you can set custom equality function to the memo option:
```js
const areEqual = (prevProps, nextProps) =>
    prevProps.theme.color === nextProps.theme.color;

export default ThemeContext.connect(otherComponent, mapContextToProps, {memo: areEqual});
```
or set the connect options.memo to 'false' and not memorize the component.