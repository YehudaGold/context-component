import './App.css';

import FunctionalThemeConsumer from './Components/FunctionalThemeConsumer';
import React from 'react';
import ThemeConnect from './Components/ThemeConnect';
import ThemeConsumer from './Components/ThemeConsumer';
import ThemeContext from './Contexts/ThemeContext';
import ThemeContextType from './Components/ThemeContextType';
import ThemeExtendContext from './Contexts/ThemeExtendContext';
import ThemeUseContext from './Components/ThemeUseContext';

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