import './App.css';

import React from 'react';

import TestExtendCounterContext from './Components/TestExtendCounterContext';
import TestThemeContext from './Components/TestThemeContext';

const App = () => (
    <div className="App">
        <TestThemeContext />
        <TestExtendCounterContext />
    </div>
);

export default App;