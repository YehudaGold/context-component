import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import FunctionalThemeConsumer from './Theme/FunctionalThemeConsumer';
import ThemeConnect from './Theme/ThemeConnect';

const TestSubThemeContext = () =>
    <ThemeContext>
        <div className="consumers-list">
            TestSubThemeContext - test provider in provider with same context have different values
            <FunctionalThemeConsumer />
            <ThemeConnect />
        </div>
    </ThemeContext>;

export default TestSubThemeContext;