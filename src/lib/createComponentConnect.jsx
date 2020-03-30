import React, {useContext} from 'react';
import {getDisplayName} from './utilities/generics';

export default (context, mapStateToProps = () => {}, mapActionsToProps = () => {}) =>
    (WrappedComponent) => { // Pure?
        const ConnectComponent = (props) => {
            const contextValue = useContext(context);

            return (
                <WrappedComponent
                    {...props}
                    {...mapStateToProps(contextValue.state, props)}
                    {...mapActionsToProps(contextValue.actions, props)}
                />
            );
        };
        // Name for displaying in the components tree, https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
        ConnectComponent.displayName = `${context.displayName}.connect(${getDisplayName(WrappedComponent)})`;

        return ConnectComponent;
    };