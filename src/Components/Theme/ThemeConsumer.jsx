/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../sheared/Button';

class ThemeConsumer extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({actions, state}) => (
                    <div className={state.theme}>
                        ThemeConsumer
                        <Button handelClick={actions.toggleTheme} text="toggle theme" />
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }

}

export default ThemeConsumer;