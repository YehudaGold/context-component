/* eslint-disable react/no-unused-state */
import {Component} from 'react';
import {createContextComponent} from '../lib';

class ThemeContext extends Component {
    state = {theme: 'dark', size: 10}

    setTheme = (theme) => {
        console.log(this);
        this.setState({theme});
    }

    setSize = (Size) => {
        this.setState({Size});
    }

    dddd() {}

    // actions = {
    //     setTheme: (Size) => {
    //         this.setState({Size});
    //     },
    //     setSize: this.setSize
    // }
}

export default createContextComponent(ThemeContext);