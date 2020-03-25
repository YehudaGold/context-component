import React, {useContext} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import ToggleTheme from './Actions/ToggleTheme';

const ThemeUseContext = () => {
    const {actions, state} = useContext(ThemeContext.componentContext);

    return (
        <div className={state.theme}>
            ThemeUseContext
            <ToggleTheme toggleTheme={actions.toggleTheme} />
        </div>
    );
};

export default ThemeUseContext;