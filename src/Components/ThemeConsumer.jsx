import React, {Component} from 'react';
import ThemeContext from '../Contexts/ThemeContext';

class ThemeConsumer extends Component {

    render() {
        const Cco = ThemeContext.Consumer();

        return (
            <Cco>
                {context => <div className={context.state.theme}>ThemeConsumer</div>}
            </Cco>
        );
    }

}

export default ThemeConsumer;