import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import TestSubThemeContext from './TestSubThemeContext';
import FunctionalThemeConsumer from './Theme/FunctionalThemeConsumer';
import ThemeConnect from './Theme/ThemeConnect';
import ThemeConsumer from './Theme/ThemeConsumer';
import ThemeContextType from './Theme/ThemeContextType';
import ThemeUseContext from './Theme/ThemeUseContext';

const TestThemeContext = () =>
    <ThemeContext>
        <div className="consumers-list">
            TestThemeContext - test all different consumer ways
            <FunctionalThemeConsumer />
            <ThemeConnect />
            <ThemeConsumer />
            <ThemeContextType />
            <ThemeUseContext />
            <TestSubThemeContext />
        </div>
    </ThemeContext>;

export default TestThemeContext;