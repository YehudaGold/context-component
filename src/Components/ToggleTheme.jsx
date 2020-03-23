import PropTypes from 'prop-types';
import React from 'react';

const ToggleTheme = ({theme, setTheme}) => {
    const handleToggle = React.useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [setTheme, theme]);

    return (
        <div className="toggle" onClick={handleToggle}>toggle</div>
    );
};

ToggleTheme.propTypes = {
    setTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
};

export default ToggleTheme;