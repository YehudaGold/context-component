import React, {Component} from 'react';

import ThemeContext from '../Contexts/ThemeContext';

class ThemeConsumer extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {context => <div className={context.state.theme}>ThemeConsumer</div>}
            </ThemeContext.Consumer>
        );
    }

}

export default ThemeConsumer;