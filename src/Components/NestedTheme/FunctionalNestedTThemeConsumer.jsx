import React from 'react';

import NestedThemeContext from '../../Contexts/NestedThemeContext';
import Button from '../Generic/Button';

const FunctionalNestedThemeConsumer = () => (
    <NestedThemeContext.Consumer>
        {context =>
            <div className={context.state.theme.background}>
                FunctionalThemeConsumer
                <Button handelClick={context.actions.toggleTheme} text="toggle theme.background" />
            </div>}
    </NestedThemeContext.Consumer>
);

export default FunctionalNestedThemeConsumer;