import React, {Component} from 'react';
import {ThemeContext} from '../Contexts/ThemeContext';

export class ThemeContextType extends Component {
    static contextType = ThemeContext.context;

    render() {
        return (
            <div className={this.context.theme}>ThemeContextType</div>
        );
    }
}

export default ThemeContextType;