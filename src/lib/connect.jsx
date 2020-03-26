/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import {getDisplayName} from './utility';

const ConsumeContext = ({
    ContextComponents,
    contexts,
    mapActionsToProps,
    mapStateToProps,
    WrappedComponent,
    ...rest
}) => {
    const [ContextComponent, ...ContextComponentsRest] = ContextComponents,
          {actions, state} = useContext(ContextComponent.componentContext);

    contexts.state[ContextComponent.name] = state;
    contexts.actions[ContextComponent.name] = actions;

    if (ContextComponentsRest.length) {
        return (
            <ConsumeContext
                ContextComponents={ContextComponentsRest}
                contexts={contexts}
                mapActionsToProps={mapActionsToProps}
                mapStateToProps={mapStateToProps}
                WrappedComponent={WrappedComponent}
                {...rest}
            />
        );
    }

    return (
        <WrappedComponent
            {...mapStateToProps(contexts.state)}
            {...mapActionsToProps(contexts.actions)}
            {...rest}
        />
    );
};
ConsumeContext.defaultProps = {
    ContextComponents: [],
    contexts: {state: {}, actions: {}}
};
ConsumeContext.propTypes = {
    ContextComponents: PropTypes.array,
    contexts: PropTypes.object,
    mapActionsToProps: PropTypes.func.isRequired,
    mapStateToProps: PropTypes.func.isRequired,
    WrappedComponent: PropTypes.elementType.isRequired
};


export const connect = (ContextComponents, mapStateToProps, mapActionsToProps) =>
    (WrappedComponent) => {
        const ConnectComponent = props => (
            <ConsumeContext
                ContextComponents={ContextComponents}
                mapActionsToProps={mapActionsToProps}
                mapStateToProps={mapStateToProps}
                WrappedComponent={WrappedComponent}
                {...props}
            />
        );
        // Name for displaying in the components tree, https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
        ConnectComponent.displayName = `connect(${getDisplayName(WrappedComponent)})`;

        return ConnectComponent;
    };

export default connect;