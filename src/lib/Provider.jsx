import PropTypes from 'prop-types';
import React from 'react';

const Provider = ({ContextComponents, children}) => {
    let collectProviders = children;

    ContextComponents.reverse().forEach((ContextComponent) => {
        collectProviders = (
            <ContextComponent>
                {collectProviders}
            </ContextComponent>
        );
    });

    return collectProviders;
};

Provider.propTypes = {
    ContextComponents: PropTypes.arrayOf(PropTypes.elementType).isRequired
};

export default Provider;