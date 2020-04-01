import PropTypes from 'prop-types';
import React from 'react';

import NestedThemeContext from '../../Contexts/NestedThemeContext';
import Button from '../Generic/Button';

const NestedThemeConnectImpure = (props) => {
    const {toggleTheme, theme, themeProp} = props;

    return (
        <div className={theme.background}>
            NestedThemeConnectImpure
            <div>{`prop theme.background: ${themeProp.background}`}</div>
            <Button handelClick={toggleTheme} text="toggle theme.background" />
        </div>
    );
};

NestedThemeConnectImpure.propTypes = {
    theme: PropTypes.object.isRequired,
    themeProp: PropTypes.object.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default NestedThemeContext.connect(
    mapStateToProps,
    mapActionToProps,
    {pure: false}
)(NestedThemeConnectImpure);