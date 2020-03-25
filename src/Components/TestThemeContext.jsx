import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import TestThemeContextSubProvider from './TestThemeContextSubProvider';
import FunctionalThemeConsumer from './Theme/FunctionalThemeConsumer';
import ThemeConnect from './Theme/ThemeConnect';
import ThemeConsumer from './Theme/ThemeConsumer';
import ThemeContextType from './Theme/ThemeContextType';
import ThemeUseContext from './Theme/ThemeUseContext';

const TestThemeContext = () =>
    <ThemeContext>
        ThemeContext
        <div className="consumers-list">
            <FunctionalThemeConsumer />
            <ThemeConnect />
            <ThemeConsumer />
            <ThemeContextType />
            <ThemeUseContext />
            <TestThemeContextSubProvider />
        </div>
    </ThemeContext>;

export default TestThemeContext;