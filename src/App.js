import './App.css';

import FunctionalThemeConsumer from './Components/Theme/FunctionalThemeConsumer';
import React from 'react';
import ThemeConnect from './Components/Theme/ThemeConnect';
import ThemeConsumer from './Components/Theme/ThemeConsumer';
import ThemeContext from './Contexts/ThemeContext';
import ThemeContextType from './Components/Theme/ThemeContextType';
import ThemeExtendContext from './Contexts/ThemeExtendContext';
import ThemeUseContext from './Components/Theme/ThemeUseContext';

const App = () => (
    <div className="App">
        <ThemeContext>
            ThemeContext
            <div className="consumers-list">
                <FunctionalThemeConsumer />
                <ThemeConnect />
                <ThemeConsumer />
                <ThemeContextType />
                <ThemeUseContext />
            </div>
        </ThemeContext>
        <ThemeExtendContext>
            ThemeExtendContext
        </ThemeExtendContext>
    </div>
);

export default App;