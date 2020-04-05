import PropTypes from 'prop-types';
import React, {useContext, memo} from 'react';

import {getDisplayName} from './utils/generics';
import withForwardRef from './utils/withForwardRef';

const connect = (ContextComponents, mapStateToProps = () => {}, mapActionsToProps = () => {}, options) =>
    (WrappedComponent) => {
        const finalOptions = {pure: true, forwardRef: false, ...options},
              WrappedComponentName = getDisplayName(WrappedComponent);

        if (finalOptions.pure) WrappedComponent = memo(WrappedComponent);

        let Connect = ContextComponents.reduceRight(
            (ChildConnect, ContextComponent, index) => {
                const ConsumeContext = ({contexts = {state: [], actions: []}, forwardedRef, ...props}) => {
                    const {actions, state} = useContext(ContextComponent.componentContext);
                    contexts.state[index] = state;
                    contexts.actions[index] = actions;

                    if (ChildConnect) {
                        return <ChildConnect {...props} contexts={contexts} forwardedRef={forwardedRef} />;
                    }

                    return (
                        <WrappedComponent
                            {...props}
                            {...mapStateToProps(contexts.state, props)}
                            {...mapActionsToProps(contexts.actions, props)}
                            ref={forwardedRef}
                        />
                    );
                };
                ConsumeContext.displayName = `connect[${getDisplayName(ContextComponent)}](${WrappedComponentName})`;
                ConsumeContext.propTypes = {
                    contexts: PropTypes.object,
                    forwardedRef: PropTypes.object
                };

                return ConsumeContext;
            },
            null
        );

        if (finalOptions.forwardRef) Connect = withForwardRef(Connect);
        if (finalOptions.pure) Connect = memo(Connect);

        return Connect;
    };

export default connect;