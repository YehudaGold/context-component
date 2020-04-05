import PropTypes from 'prop-types';
import React from 'react';

import IrrelevantContext from '../../Contexts/IrrelevantContext';
import Button from '../Generic/Button';

let renderCount = 1;

const IrrelevantConnectImpure = (props) => {
    const {toggleIrrelevant, toggleTheme, theme, themeProp} = props;

    return (
        <div className={theme}>
            IrrelevantConnectImpure
            <div>{`renderCount: ${renderCount++}`}</div>
            <div>{`theme prop: ${themeProp}`}</div>
            <Button handelClick={toggleTheme} text="toggle theme" />
            <Button handelClick={toggleIrrelevant} text="toggle irrelevant" />
        </div>
    );
};

IrrelevantConnectImpure.propTypes = {
    theme: PropTypes.string.isRequired,
    themeProp: PropTypes.string.isRequired,
    toggleIrrelevant: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired
};

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({
          toggleTheme: actions.toggleTheme,
          toggleIrrelevant: actions.toggleIrrelevant
      });

export default IrrelevantContext.connect(
    mapStateToProps,
    mapActionToProps,
    {memo: false}
)(IrrelevantConnectImpure);