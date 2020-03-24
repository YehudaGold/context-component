import React from 'react';
import ThemeContext from '../Contexts/ThemeContext';

const FunctionalThemeConsumer = () => {
    const Cco = ThemeContext.Consumer();

    return (
        <Cco>
            {context => <div className={context.state.theme}>FunctionalThemeConsumer</div>}
        </Cco>
    );
};

export default FunctionalThemeConsumer;