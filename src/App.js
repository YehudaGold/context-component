import './App.css';

import {FunctionalThemeConsumer} from './Layout/FunctionalThemeConsumer';
import {ThemeContextType} from './Layout/ThemeContextType';
import Provider from './lib/Provider';
import React from 'react';
import ThemeConsumer from './Layout/ThemeConsumer';
import {ThemeContext} from './Contexts/ThemeContext';

const App = () => (
    <div className="App">
        <header className="App-header">
            <p>
          Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
                className="App-link"
                href="https://reactjs.org"
                rel="noopener noreferrer"
                target="_blank"
        >
          Learn React
            </a>
        </header>


        <ThemeContext>
            <ThemeConsumer />
            <FunctionalThemeConsumer />
            <ThemeContextType />
        </ThemeContext>
    </div>
);

export default App;