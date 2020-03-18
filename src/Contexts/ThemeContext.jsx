import React, {Component} from 'react';
import {createContext} from '../lib/ContextComponent';

class ThemeContext extends Component {
    state = {theme: 'dark', size: 10}

    setTheme = (theme) => {
        this.setState({theme});
    }

    setSize = (Size) => {
        this.setState({Size});
    }
}

export default createContext(ThemeContext);