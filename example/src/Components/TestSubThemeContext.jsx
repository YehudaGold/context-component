import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import ThemeConnect from './Theme/ThemeConnect';
import ThemeConsumer from './Theme/ThemeConsumer';

const TestSubThemeContext = () =>
    <ThemeContext>
        <div className="list">
            TestSubThemeContext - test provider in provider with same context have different values
            <ThemeConsumer />
            <ThemeConnect />
        </div>
    </ThemeContext>;

export default TestSubThemeContext;