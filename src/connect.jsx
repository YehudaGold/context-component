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

    let Connect = ContextComponents.reduceRight(
        (ChildConsume, ContextComponent, index) => {
            const ConsumeContext = ({contexts = [], forwardedRef, ...props}) => {
                contexts[index] = useContext(ContextComponent.componentContext);

                if (ChildConsume) return <ChildConsume {...props} contexts={contexts} forwardedRef={forwardedRef} />;

                return (
                    <WrappedComponent {...props} {...mapContextsToProps(contexts, props)} ref={forwardedRef} />
                );
            };
            ConsumeContext.displayName = `connect[${getDisplayName(ContextComponent)}](${wrappedComponentName})`;
            ConsumeContext.propTypes = {contexts: PropTypes.array, forwardedRef: PropTypes.object};

            return ConsumeContext;
        },
        null
    );

    if (finalOptions.forwardRef) Connect = withForwardRef(Connect);
    if (finalOptions.memo) Connect = memo(Connect);

    return Connect;
};

export default connect;