import React from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import ToggleTheme from './Actions/ToggleTheme';

const FunctionalThemeConsumer = () => (
    <ThemeContext.Consumer>
        {context =>
            <div className={context.state.theme}>
                FunctionalThemeConsumer
                <ToggleTheme toggleTheme={context.actions.toggleTheme} />
            </div>}
    </ThemeContext.Consumer>
);

export default FunctionalThemeConsumer;