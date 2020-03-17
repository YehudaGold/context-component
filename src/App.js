import './App.css';

import Layout from './Layout/Layout';
import Provider from './lib/Provider';
import React from 'react';
import {ThemeContext} from './Contexts/ThemeContext';
import {Th} from './Contexts/Th';

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

    <Th >
      <Layout />
    </Th>
  </div>
);

export default App;