import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

class ThemeContextType extends Component {

    static contextType = ThemeContext.componentContext;

    render() {
        const {theme, toggleTheme} = this.context;

        return (
            <div className={theme}>
                ThemeContextType
                <Button handelClick={toggleTheme} text="toggle theme" />
            </div>
        );
    }

}

export default ThemeContextType;