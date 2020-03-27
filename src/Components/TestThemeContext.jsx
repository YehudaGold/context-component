import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import FunctionalThemeConsumer from './Theme/FunctionalThemeConsumer';
import ThemeConnect from './Theme/ThemeConnect';
import ThemeConsumer from './Theme/ThemeConsumer';
import ThemeContextType from './Theme/ThemeContextType';
import ThemeUseContext from './Theme/ThemeUseContext';

const TestThemeContext = props =>
    <ThemeContext>
        <div className="consumers-list">
            TestThemeContext - test all different consume context ways
            <FunctionalThemeConsumer />
            <ThemeConnect />
            <ThemeConsumer />
            <ThemeContextType />
            <ThemeUseContext />
            {props.children}
        </div>
    </ThemeContext>;

export default TestThemeContext;