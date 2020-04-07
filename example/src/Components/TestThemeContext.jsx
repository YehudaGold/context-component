import React from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import ThemeConnect from './Theme/ThemeConnect';
import ThemeConsumer from './Theme/ThemeConsumer';
import ThemeContextType from './Theme/ThemeContextType';
import ThemeUseContext from './Theme/ThemeUseContext';

const TestThemeContext = props =>
    <ThemeContext>
        <div className="list">
            TestThemeContext - test all different consume context ways
            <ThemeConnect />
            <ThemeConsumer />
            <ThemeUseContext />
            <ThemeContextType />
            {props.children}
        </div>
    </ThemeContext>;

export default TestThemeContext;