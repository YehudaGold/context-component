import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import {getDisplayName} from './utilities/generics';

const connect = (ContextComponents, mapStateToProps = () => {}, mapActionsToProps = () => {}, options) =>
    (WrappedComponent) => {
        const finalOptions = {pure: true, ...options},
              WrappedComponentName = getDisplayName(WrappedComponent);

        if (finalOptions.pure) WrappedComponent = React.memo(WrappedComponent);

        const ConsumeContext = ({remainedContextComponents, contexts, ...propsRest}) => {
            const [ContextComponent, ...ContextComponentsRest] = remainedContextComponents,
                  {actions, state} = useContext(ContextComponent.componentContext),
                  contextPosition = ContextComponents.length - remainedContextComponents.length;

            contexts.state[contextPosition] = state;
            contexts.actions[contextPosition] = actions;

            if (ContextComponentsRest.length) {
                return (
                    <ConsumeContext
                        {...propsRest}
                        contexts={contexts}
                        remainedContextComponents={ContextComponentsRest}
                    />
                );
            }

            return (
                <WrappedComponent
                    {...propsRest}
                    {...mapStateToProps(contexts.state, propsRest)}
                    {...mapActionsToProps(contexts.actions, propsRest)}
                />
            );
        };
        ConsumeContext.defaultProps = {
            contexts: {state: [], actions: []},
            remainedContextComponents: ContextComponents
        };
        ConsumeContext.propTypes = {
            contexts: PropTypes.object,
            remainedContextComponents: PropTypes.arrayOf(PropTypes.elementType)
        };

        // Name for displaying in the components tree, https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
        const contextNames = ContextComponents.map(ContextComponent => getDisplayName(ContextComponent));
        ConsumeContext.displayName = `connect[${contextNames}](${WrappedComponentName})`;

        if (finalOptions.pure) return React.memo(ConsumeContext);

        return ConsumeContext;
    };

export default connect;