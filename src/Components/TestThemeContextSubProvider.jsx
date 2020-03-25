import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import FunctionalThemeConsumer from './Theme/FunctionalThemeConsumer';
import ThemeConnect from './Theme/ThemeConnect';

const TestThemeContextSubProvider = () =>
    <ThemeContext>
        ThemeContextSubProvider
        <div className="consumers-list">
            <FunctionalThemeConsumer />
            <ThemeConnect />
        </div>
    </ThemeContext>;

export default TestThemeContextSubProvider;