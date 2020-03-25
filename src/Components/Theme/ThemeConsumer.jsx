/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import ToggleTheme from './Actions/ToggleTheme';

class ThemeConsumer extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({actions, state}) => (
                    <div className={state.theme}>
                        ThemeConsumer
                        <ToggleTheme toggleTheme={actions.toggleTheme} />
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }

}

export default ThemeConsumer;