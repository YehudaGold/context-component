import PropTypes from 'prop-types';

import React, {ElementType, forwardRef, ForwardRefExoticComponent} from 'react';

/** React ref propType */
export const RefPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.elementType})
]);

/** Wraps the `WrappedComponent` with `React.forwardRef` and provide `forwardedRef` prop. */
const withForwardRef = (WrappedComponent: ElementType) : ForwardRefExoticComponent<unknown> => {
    const ForwardRefComponent = (props, ref) => <WrappedComponent {...props} forwardedRef={ref} />;
    ForwardRefComponent.displayName = WrappedComponent.displayName;

    return forwardRef(ForwardRefComponent);
};

export default withForwardRef;