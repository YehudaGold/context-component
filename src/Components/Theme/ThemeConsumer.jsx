/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

class ThemeConsumer extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <div className={theme}>
                        ThemeConsumer
                        <Button handelClick={toggleTheme} text="toggle theme" />
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }

}

export default ThemeConsumer;