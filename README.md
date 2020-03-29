
# test ContextComponent

this project uses ContextComponent package, and show examples of usage for testing

## run

to open the react app run

```
npm start
```
# ContextComponent

ContextComponent is aimed at reducing the boilerplate of writing flexible centralized state management with React context.

ContextComponent provide extendable React class that automatically connect it\`s state and methods to a context and provide it to his children's, and expose api to easily consume the context by `connect` HOC (similar to react-redux) or by React regular context methodes - Consumer, contextType, useContext.

## basic usage

### creating ContextComponent

creating ContextComponent, component with state and functions you want to share in you app:

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

The ContextComponent implement for you `render` methods that render the `componentContext.Provider` with the component state and instance method's as value.

You can use React lifecycle method's to initialize the state and manipulate it.

Automatically all non React lifecycle method's are provided by the context but you can override this by adding `actions` property to the class with the method's you want to provide.
### providing ContextComponent

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
### consuming ContextComponent

To consume the context in component you can connect it to the the context by HOC:

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
or by rendering the ContextComponent.Consumer:

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
or by using class contextType property:
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
or by useContext() hook:
```jsx
import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

export const otherComponent = () => {
    const {actions, state} = useContext(ThemeContext.componentContext);

    return <div className={context.state.theme} onClick={context.actions.toggleTheme} />;
};

```

## multiple contexts
you can use the Provider component to provide multiple contexts together:

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
and consume them together with connect HOC:

otherComponent.jsx

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

const mapStateToProps = ({CounterContext, ThemeContext}) => ({
    counter: CounterContext.counter,
    theme: ThemeContext.theme
});

const mapActionToProps = ({CounterContext, ThemeContext}) => ({
    increase: CounterContext.increase,
    toggleTheme: ThemeContext.toggleTheme
});

export default connect([CounterContext, ThemeContext], mapStateToProps, mapActionToProps)(otherComponent);
```