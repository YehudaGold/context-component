import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

class ThemeContextType extends Component {

    static contextType = ThemeContext.componentContext;

    render() {
        const {actions, state} = this.context;

        return (
            <div className={state.theme}>
                ThemeContextType
                <Button handelClick={actions.toggleTheme} text="toggle theme" />
            </div>
        );
    }

}

export default ThemeContextType;