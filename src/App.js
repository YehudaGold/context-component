import React from 'react';

import './App.css';
import TestContextsLifecycle from './Components/TestContextsLifecycle';
import TestExtendCounterContext from './Components/TestExtendCounterContext';
import TestForwardRef from './Components/TestForwardRef';
import TestMultipleContexts from './Components/TestMultiplyContexts';
import TestOwnPropsConnect from './Components/TestOwnPropsConnect';
import TestRerenderContext from './Components/TestRerenderContext';
import TestSubThemeContext from './Components/TestSubThemeContext';
import TestThemeContext from './Components/TestThemeContext';

const App = () => (
    <div className="App">
        <React.StrictMode>
            <TestThemeContext>
                <TestSubThemeContext />
            </TestThemeContext>
            <TestMultipleContexts />
            <TestExtendCounterContext />
            <TestContextsLifecycle />
            <TestOwnPropsConnect />
            <TestRerenderContext />
            <TestForwardRef />
        </React.StrictMode>
    </div>
);

export default App;