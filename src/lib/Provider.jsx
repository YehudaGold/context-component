import PropTypes from 'prop-types';
import React from 'react';

const Provider = ({ContextComponents, children}) =>
    ContextComponents.reduceRight(
        (childrenComponents, ContextComponent) =>
            <ContextComponent>
                {childrenComponents}
            </ContextComponent>,
        children
    );

Provider.propTypes = {
    ContextComponents: PropTypes.arrayOf(PropTypes.elementType).isRequired
};

export default Provider;