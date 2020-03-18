import React, {useContext} from 'react';

const defaultComponentFunctions = ['state', ...Object.keys(new React.Component())];

const createProviderComponent = (Provider, contextClass) =>
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
            return (
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            );
        }
    };

const createConnectFunction = context =>
    (mapContextToProps = () => {}) =>
        WrappedComponent =>
            // Named react component for displaying in the components tree
            function ConnectComponent(props) {
                const contextValue = useContext(context);
                return <WrappedComponent {...mapContextToProps(contextValue)} {...props} />;
            };


export const createContext = (contextClass) => {
    const context = React.createContext();

    return {
        context,
        connect: createConnectFunction(context),
        Consumer: context.Consumer,
        Provider: createProviderComponent(context.Provider, contextClass)
    };
};