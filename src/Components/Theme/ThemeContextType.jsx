import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import ToggleTheme from './Actions/ToggleTheme';

class ThemeContextType extends Component {

    static contextType = ThemeContext.componentContext;

    render() {
        const {actions, state} = this.context;

        return (
            <div className={state.theme}>
                ThemeContextType
                <ToggleTheme toggleTheme={actions.toggleTheme} />
            </div>
        );
    }

}

export default ThemeContextType;