import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import IrrelevantContext from '../../Contexts/IrrelevantContext';
import Button from '../Generic/Button';

let renderCount = 1;

const IrrelevantUseContext = ({themeProp}) => {
    const {actions, state} = useContext(IrrelevantContext.componentContext);

    return (
        <div className={state.theme}>
            IrrelevantUseContext
            <div>{`renderCount: ${renderCount++}`}</div>
            <div>{`theme prop: ${themeProp}`}</div>
            <Button handelClick={actions.toggleTheme} text="toggle theme" />
            <Button handelClick={actions.toggleIrrelevant} text="toggle irrelevant" />
        </div>
    );
};
IrrelevantUseContext.propTypes = {
    themeProp: PropTypes.string.isRequired
};

export default React.memo(IrrelevantUseContext);