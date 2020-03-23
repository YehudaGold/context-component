/* eslint-disable react/no-multi-comp */
import React, {useContext} from 'react';

const defaultComponentFunctions = [...Object.keys(new React.Component()), 'state'];

const getActions = (componentInstance) => {
    const actions = {};

    Object.keys(componentInstance)
        .filter(componentMembers => typeof componentInstance[componentMembers] === 'function')
        .filter(componentFunction => !defaultComponentFunctions.includes(componentFunction))
        .forEach((contextFunction) => {
            actions[contextFunction] = componentInstance[contextFunction];
        });

    return actions;
};

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


const addComponentMembers = (ContextClass, context) => {
    if (!new ContextClass().actions) {
        // console.log('ContextClass.prototype', ContextClass.prototype);
        ContextClass.prototype.actions = getActions(new ContextClass());
    }
    if (!ContextClass.prototype.render) {
        ContextClass.prototype.render = function render() {
            return (<context.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </context.Provider>);
        };
    }
    if (!ContextClass.prototype.getContext) ContextClass.prototype.getContext = () => context;
};

const addStaticsMembers = (ContextClass, context) => {
    ContextClass.getContext = () => context;
    ContextClass.Consumer = context.Consumer;
    ContextClass.connect = createConnectFunction(context);
};

export const createContextComponent = (ContextClass) => {
    const context = React.createContext();
    // Name for displaying in the components tree
    context.displayName = ContextClass.name;

    // TODO: clone class prototype

    addComponentMembers(ContextClass, context);
    addStaticsMembers(ContextClass, context);
    // console.log(ContextClass.prototype);

    return ContextClass;
};