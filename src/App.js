import React from 'react';

import './App.css';
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
    </div>
);

export default App;