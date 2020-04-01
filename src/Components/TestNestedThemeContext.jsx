import React from 'react';

import NestedThemeContext from '../Contexts/NestedThemeContext';
import FunctionalNestedThemeConsumer from './NestedTheme/FunctionalNestedTThemeConsumer';
import NestedThemeConnect from './NestedTheme/NestedThemeConnect';

const TestNestedThemeContext = () =>
    <NestedThemeContext>
        <div className="list">
            TestNestedThemeContext - test update of nested values
            <FunctionalNestedThemeConsumer />
            <NestedThemeConnect />
        </div>
    </NestedThemeContext>;

export default TestNestedThemeContext;