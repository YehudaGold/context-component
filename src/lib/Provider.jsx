import React from 'react';
import propTypes from 'prop-types';

const Provider = ({ contextComponent, children }) => {
    const cc = new contextComponent();
    console.log(cc);
    return (
      <cc.Provider value={cc.state}>
        {children}
      </cc.Provider>
    );
};

Provider.propTypes = {
    contextComponent: propTypes.func.isRequired
    // value: propTypes.any.isRequired
};


export default Provider;