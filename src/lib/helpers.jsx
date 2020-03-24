import React, {useContext} from 'react';
import {getContext} from './contextsStorage';

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


// TODO: move to other file

export const context = key => getContext(key);
export const Consumer = key => getContext(key).Consumer;
export const connect = key => createConnectFunction(getContext(key));