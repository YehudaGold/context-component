import React, {useContext} from 'react';

const defaultComponentFunctions = [...Object.keys(new React.Component()), 'state'];

const createProviderComponent = (Provider, contextClass) => {
    class ProviderComponent extends contextClass {
        constructor(props) {
            super(props);
            Object.keys(this)
                .filter(componentFunction => !defaultComponentFunctions.includes(componentFunction))
                .forEach((contextFunction) => {
                    this.state[contextFunction] = this[contextFunction];
                });
        }

        render() {
            return <Provider value={this.state}>{this.props.children}</Provider>;
        }
    }
    // Name for displaying in the components tree ,https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
    ProviderComponent.displayName = `provider(${contextClass.name})`;

    return ProviderComponent;
};

const createConnectFunction = context =>
    mapContextToProps =>
        (WrappedComponent) => {
            const ConnectComponent = (props) => {
                const contextValue = useContext(context);
                return <WrappedComponent {...mapContextToProps(contextValue)} {...props} />;
            };
            // Name for displaying in the components tree ,https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
            ConnectComponent.displayName = `${context.displayName}.connect(${WrappedComponent.name})`;

            return ConnectComponent;
        };

export const createContextComponent = (contextClass) => {
    const context = React.createContext();
    // Name for displaying in the components tree
    context.displayName = contextClass.name;

    return {
        context,
        connect: createConnectFunction(context),
        Consumer: context.Consumer,
        Provider: createProviderComponent(context.Provider, contextClass)
    };
};