import React, {useContext} from 'react';
import {getContext} from './contextsStorage';

/*
 * Const addComponentMembers = (ContextClass, context) => {
 *     if (!new ContextClass().actions) {
 *         console.log('ContextClass.prototype', ContextClass.prototype);
 *         ContextClass.prototype.actions = getActions(new ContextClass());
 *     }
 *     if (!ContextClass.prototype.render) {
 *         ContextClass.prototype.render = function render() {
 *             return (<context.Provider value={{state: this.state, actions: this.actions}}>
 *                 {this.props.children}
 *             </context.Provider>);
 *         };
 *     }
 *     if (!ContextClass.prototype.getContext) ContextClass.prototype.getContext = () => context;
 * };
 */

export const createConnectFunction = context =>
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

export const context = key => getContext(key);
export const Consumer = key => getContext(key).Consumer;
export const connect = key => createConnectFunction(getContext(key));