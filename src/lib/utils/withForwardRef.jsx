import React, {forwardRef} from 'react';

const withForwardRef = (WrappedComponent) => {
    const ForwardRef = (props, ref) => <WrappedComponent {...props} forwardedRef={ref} />;
    ForwardRef.displayName = WrappedComponent.displayName;

    return forwardRef(ForwardRef);
};

export default withForwardRef;