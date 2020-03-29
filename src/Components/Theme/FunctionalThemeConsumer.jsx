import React from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

const FunctionalThemeConsumer = () => (
    <ThemeContext.Consumer>
        {context =>
            <div className={context.state.theme}>
                FunctionalThemeConsumer
                <Button handelClick={context.actions.toggleTheme} text="toggle theme" />
            </div>}
    </ThemeContext.Consumer>
);

export default FunctionalThemeConsumer;