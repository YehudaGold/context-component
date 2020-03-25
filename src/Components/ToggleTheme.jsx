import PropTypes from 'prop-types';
import React from 'react';

const ToggleTheme = ({toggleTheme}) => (
    <div className="toggle" onClick={toggleTheme}>toggle</div>
);

ToggleTheme.propTypes = {
    toggleTheme: PropTypes.func.isRequired
};

export default React.memo(ToggleTheme);