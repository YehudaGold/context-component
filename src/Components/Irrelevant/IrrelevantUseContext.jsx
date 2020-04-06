import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import IrrelevantContext from '../../Contexts/IrrelevantContext';
import Button from '../Generic/Button';

let renderCount = 0;

const IrrelevantUseContext = ({themeProp}) => {
    const {theme, toggleTheme, toggleIrrelevant} = useContext(IrrelevantContext.componentContext);

    return (
        <div className={theme}>
            IrrelevantUseContext
            <div>{`renderCount: ${++renderCount}`}</div>
            <div>{`theme prop: ${themeProp}`}</div>
            <Button handelClick={toggleTheme} text="toggle theme" />
            <Button handelClick={toggleIrrelevant} text="toggle irrelevant" />
        </div>
    );
};
IrrelevantUseContext.propTypes = {
    themeProp: PropTypes.string.isRequired
};

export default React.memo(IrrelevantUseContext);