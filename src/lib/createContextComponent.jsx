/* eslint-disable react/no-multi-comp */
import React, {useContext} from 'react';

const defaultComponentFunctions = [...Object.keys(new React.Component()), 'state'];

// TODO: automatic default actions
function getActions() {
    Object.keys(this)
        .filter(componentFunction => !defaultComponentFunctions.includes(componentFunction))
        .forEach((contextFunction) => {
            this.state[contextFunction] = this[contextFunction];
        });
}

const createConnectFunction = context =>
    (mapContextToProps = () => {}, mapActionsToProps = () => {}) =>
        (WrappedComponent) => {
            const ConnectComponent = (props) => {
                const contextValue = useContext(context);

                return (
                    <WrappedComponent
                        {...mapContextToProps(contextValue.state)}
                        {...mapActionsToProps(contextValue.actions)}
                        {...props}
                    />
                );
            };
            // Name for displaying in the components tree, https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
            ConnectComponent.displayName = `${context.displayName}.connect(${WrappedComponent.name})`;

            return ConnectComponent;
        };

export const createContextComponent = (contextClass) => {
    const context = React.createContext();
    // Name for displaying in the components tree
    context.displayName = contextClass.name;

    // TODO: clone class prototype

    if (!contextClass.prototype.render) {
        contextClass.prototype.render = function render() {
            return (
                <context.Provider value={{state: this.state, actions: this.actions}}>
                    {this.props.children}
                </context.Provider>
            );
        };
    }
    contextClass.prototype.getContext = () => context;
    contextClass.getContext = () => context;

    contextClass.Consumer = context.Consumer;
    contextClass.connect = createConnectFunction(context);

    return contextClass;
};