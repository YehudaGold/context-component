import React from 'react';

import './App.css';
import TestContextsLifecycle from './Components/TestContextsLifecycle';
import TestExtendCounterContext from './Components/TestExtendCounterContext';
import TestMultipleContexts from './Components/TestMultiplyContexts';
import TestSubThemeContext from './Components/TestSubThemeContext';
import TestThemeContext from './Components/TestThemeContext';

const App = () => (
    <div className="App">
        <TestThemeContext>
            <TestSubThemeContext />
        </TestThemeContext>
        <TestMultipleContexts />
        <TestExtendCounterContext />
        <TestContextsLifecycle />
    </div>
);

export default App;