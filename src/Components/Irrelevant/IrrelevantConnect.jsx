import PropTypes from 'prop-types';
import React from 'react';

import IrrelevantContext from '../../Contexts/IrrelevantContext';
import Button from '../Generic/Button';

let renderCount = 1;

const IrrelevantConnect = (props) => {
    const {toggleIrrelevant, toggleTheme, theme, themeProp} = props;

    return (
        <div className={theme}>
            IrrelevantConnect
            <div>{`renderCount: ${renderCount++}`}</div>
            <div>{`theme prop: ${themeProp}`}</div>
            <Button handelClick={toggleTheme} text="toggle theme" />
            <Button handelClick={toggleIrrelevant} text="toggle irrelevant" />
        </div>
    );
};

IrrelevantConnect.propTypes = {
    theme: PropTypes.string.isRequired,
    themeProp: PropTypes.string.isRequired,
    toggleIrrelevant: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

const mapContextToProps = context => ({
    theme: context.theme,
    toggleTheme: context.toggleTheme,
    toggleIrrelevant: context.toggleIrrelevant
});

export default IrrelevantContext.connect(mapContextToProps)(IrrelevantConnect);