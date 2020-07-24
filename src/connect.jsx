import PropTypes from 'prop-types';
import React, {useContext, memo} from 'react';

import {getDisplayName} from './utils/generics';
import withForwardRef from './utils/withForwardRef';

const connect = (WrappedComponent, ContextComponents, mapContextsToProps, options) => {
    const finalOptions = {forwardRef: false, memo: true, ...options},
          wrappedComponentName = getDisplayName(WrappedComponent); // Cached before memo

    if (finalOptions.memo) {
        if (typeof finalOptions.memo === 'function') {
            WrappedComponent = memo(WrappedComponent, finalOptions.memo);
        } else {
            WrappedComponent = memo(WrappedComponent);
        }
    }

    let ConnectComponent = ContextComponents.reduceRight(
        (PreviousComponent, ContextComponent, index) => {
            const ConsumeComponent = ({contexts = [], forwardedRef, ...props}) => {
                contexts[index] = useContext(ContextComponent.componentContext);

                if (PreviousComponent) {
                    return <PreviousComponent {...props} contexts={contexts} forwardedRef={forwardedRef} />;
                }

                return <WrappedComponent {...props} {...mapContextsToProps(contexts, props)} ref={forwardedRef} />;
            };
            ConsumeComponent.displayName = `connect[${getDisplayName(ContextComponent)}](${wrappedComponentName})`;
            ConsumeComponent.propTypes = {contexts: PropTypes.array, forwardedRef: PropTypes.object};

            return ConsumeComponent;
        },
        null
    );

    if (finalOptions.forwardRef) ConnectComponent = withForwardRef(ConnectComponent);
    if (finalOptions.memo) {
        if (typeof finalOptions.memo === 'function') {
            ConnectComponent = memo(ConnectComponent, finalOptions.memo);
        } else {
            ConnectComponent = memo(ConnectComponent);
        }
    }

    return ConnectComponent;
};

export default connect;