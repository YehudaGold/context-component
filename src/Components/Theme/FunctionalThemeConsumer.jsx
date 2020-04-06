import React from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

const FunctionalThemeConsumer = () => (
    <ThemeContext.Consumer>
        {({theme, toggleTheme}) =>
            <div className={theme}>
                FunctionalThemeConsumer
                <Button handelClick={toggleTheme} text="toggle theme" />
            </div>}
    </ThemeContext.Consumer>
);

export default FunctionalThemeConsumer;