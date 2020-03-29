import React, {useContext} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../sheared/Button';

const ThemeUseContext = () => {
    const {actions, state} = useContext(ThemeContext.componentContext);

    return (
        <div className={state.theme}>
            ThemeUseContext
            <Button handelClick={actions.toggleTheme} text="toggle theme" />
        </div>
    );
};

export default ThemeUseContext;