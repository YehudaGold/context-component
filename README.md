
# test ContextComponent

this  project uses ContextComponent lib, and show examples to usage for testing

## run

to open the react app run

```
npm start
```

## ContextComponent basic usage

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
### providing ContextComponent

providing the context to the react tree, by rendering the component:

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

consuming the context in component, by rendering the consumer:

otherComponent.jsx

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
or by contextType:
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
or by useContext()(:
```jsx
import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

export const otherComponent = () => {
    const {actions, state} = useContext(ThemeContext.componentContext);

    return <div className={context.state.theme} onClick={context.actions.toggleTheme} />;
};

```
or by the connect api (like react-redux connect):
```jsx
import React from 'react';
import ThemeContext from './ThemeContext';

const otherComponent = ({toggleTheme, theme}) =>
    <div className={theme} onClick={toggleTheme} />;

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default ThemeContext.connect(mapStateToProps, mapActionToProps)(otherComponent);
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
    <>
        <div className={theme} onClick={toggleTheme} />
        <div onClick={increase}>{counter}</div>
    </>;

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