import React, {useContext} from 'react';
import {getDisplayName} from './utilities/generics';

export default (context, mapStateToProps = () => {}, mapActionsToProps = () => {}) =>
    (WrappedComponent) => {
        const ConnectComponent = (props) => {
            const contextValue = useContext(context);

            return (
                <WrappedComponent
                    {...mapStateToProps(contextValue.state)}
                    {...mapActionsToProps(contextValue.actions)}
                    {...props}
                />
            );
        };
        // Name for displaying in the components tree, https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
        ConnectComponent.displayName = `${context.displayName}.connect(${getDisplayName(WrappedComponent)})`;

        return ConnectComponent;
    };