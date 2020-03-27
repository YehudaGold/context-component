import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import {getDisplayName} from './utility';

const connect = (ContextComponents, mapStateToProps = () => {}, mapActionsToProps = () => {}) =>
    (WrappedComponent) => {
        // TODO: add array error

        const ConsumeContext = ({ContextComponents, contexts, ...propsRest}) => {
            const [ContextComponent, ...ContextComponentsRest] = ContextComponents,
                  {actions, state} = useContext(ContextComponent.componentContext);

            contexts.state[ContextComponent.name] = state;
            contexts.actions[ContextComponent.name] = actions;

            if (ContextComponentsRest.length) {
                return (
                    <ConsumeContext
                        ContextComponents={ContextComponentsRest}
                        contexts={contexts}
                        {...propsRest}
                    />
                );
            }

            return (
                <WrappedComponent
                    {...mapStateToProps(contexts.state)}
                    {...mapActionsToProps(contexts.actions)}
                    {...propsRest}
                />
            );
        };
        ConsumeContext.defaultProps = {
            ContextComponents,
            contexts: {state: {}, actions: {}}
        };
        ConsumeContext.propTypes = {
            ContextComponents: PropTypes.arrayOf(PropTypes.elementType),
            contexts: PropTypes.object
        };

        // Name for displaying in the components tree, https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
        const contextNames = ContextComponents.map(ContextComponent => getDisplayName(ContextComponent));
        ConsumeContext.displayName = `connect[${contextNames}](${getDisplayName(WrappedComponent)})`;

        return ConsumeContext;
    };

export default connect;