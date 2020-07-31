import PropTypes from 'prop-types';
import React, {forwardRef} from 'react';

/** React ref propType */
export const forwardedRefPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.elementType})
]);

/** Wraps the `WrappedComponent` with `React.forwardRef`. */
const withForwardRef = (WrappedComponent) => {
    const ForwardRefComponent = (props, ref) => <WrappedComponent {...props} forwardedRef={ref} />;
    ForwardRefComponent.displayName = WrappedComponent.displayName;

    return forwardRef(ForwardRefComponent);
};

export default withForwardRef;