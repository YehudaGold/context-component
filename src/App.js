import './App.css';

import FunctionalThemeConsumer from './Components/FunctionalThemeConsumer';
import React from 'react';
import ThemeConnect from './Components/ThemeConnect';
import ThemeConsumer from './Components/ThemeConsumer';
import ThemeContext from './Contexts/ThemeContext';
import ThemeContextType from './Components/ThemeContextType';
import ThemeUseContext from './Components/ThemeUseContext';

const App = () => (
    <div className="App">
        <ThemeContext>
            <div className="consumers-list">
                <ThemeConsumer />
                <FunctionalThemeConsumer />
                <ThemeContextType />
                <ThemeConnect />
                <ThemeUseContext />
            </div>
        </ThemeContext>
    </div>
);

export default App;
