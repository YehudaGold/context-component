import './App.css';

import React from 'react';

import TestExtendCounterContext from './Components/TestExtendCounterContext';
import TestSubThemeContext from './Components/TestSubThemeContext';
import TestThemeContext from './Components/TestThemeContext';

const App = () => (
    <div className="App">
        <TestThemeContext>
            <TestSubThemeContext />
        </TestThemeContext>

        <TestExtendCounterContext />
    </div>
);

export default App;