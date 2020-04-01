import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import NestedThemeContext from '../../Contexts/NestedThemeContext';
import Button from '../Generic/Button';


const NestedThemeUseContext = ({themeProp}) => {
    const {actions, state} = useContext(NestedThemeContext.componentContext);

    return (
        <div className={state.theme.background}>
            NestedThemeUseContext
            <div>{`prop theme.background: ${themeProp.background}`}</div>
            <Button handelClick={actions.toggleTheme} text="toggle theme.background" />
        </div>
    );
};
NestedThemeUseContext.propTypes = {
    themeProp: PropTypes.object.isRequired
};

export default React.memo(NestedThemeUseContext);