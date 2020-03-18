import React, {Component, useContext} from 'react';

const contexts = {};
const components = {};

export const registerComponent = (contextName, component) => {
    components[contextName] = component;
};

const createConnectFunction = (Consumer, contextName) => WrappedComponent =>
// Named react component for it to have a name in the components tree
    function ConnectedComponent({context, ...rest}) {
        return (
            <Consumer>
                {({state, actions}) => {
                    context = context || {state: {}, actions: {}};
                    context.state[contextName] = state;
                    context.actions[contextName] = actions;
                    return <WrappedComponent context={context} {...rest} />;
                }}
            </Consumer>
        );
    };

const createProviderComponent = (Provider, actions, initialState, initilize) => class ContextProvider extends Component {
    constructor(props) {
        super(props);

        const boundActions = {};
        Object.entries(actions).forEach(([key, action]) => {
            boundActions[key] = action.bind(this);
        });

        this.actions = boundActions;
        this.state = initialState;
        initilize.call(this);
    }

    render() {
        return (
            <Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </Provider>
        );
    }
};

export const createContext = (contextName, initialState = {}, actions = {}, initilize = () => {}) => {
    const context = React.createContext(null);

    const component = {
        Provider: createProviderComponent(context.Provider, actions, initialState, initilize),
        connect: createConnectFunction(context.Consumer, contextName)
    };

    contexts[contextName] = context;
    registerComponent(contextName, component);
};

    if (!Array.isArray(contextNames)) {
        contextNames = [contextNames];
    }

    let component = ({context, ...rest}) => {
        const stateProps = mapStateToProps(context.state);
        const actionsProps = mapActionsToProps(context.actions);
        return <WrappedComponent {...stateProps} {...actionsProps} {...rest} />;
    };

    contextNames.forEach((contextName) => {
        component = components[contextName].connect(component);
    });

    return component;
};

export const Provider = ({contextNames, children}) => {
    if (!Array.isArray(contextNames)) {
        contextNames = [contextNames];
    }

    let componentChildren = children;

    contextNames.forEach((contextName) => {
        const CurrentProvider = components[contextName].Provider;

        componentChildren = (
            <CurrentProvider>
                {componentChildren}
            </CurrentProvider>
        );
    });

    return componentChildren;
};

export const useContextByName = name => useContext(contexts[name]);