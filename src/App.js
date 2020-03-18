import './App.css';

import React from 'react';

import ThemeConnect from './Layout/ThemeConnect';
import FunctionalThemeConsumer from './Layout/FunctionalThemeConsumer';
import ThemeConsumer from './Layout/ThemeConsumer';
import ThemeContext from './Contexts/ThemeContext';
import ThemeContextType from './Layout/ThemeContextType';

const App = () => (
    <div className="App">
        <ThemeContext.Provider>
            <ThemeConsumer />
            <FunctionalThemeConsumer />
            <ThemeContextType />
            <ThemeConnect />
        </ThemeContext.Provider>
    </div>
);

export default App;