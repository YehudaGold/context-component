import React, {Component} from 'react';
import ThemeContext from '../Contexts/ThemeContext';

class ThemeContextType extends Component {

    static contextType = ThemeContext.componentContext();

    render() {
        return (
            <div className={this.context.state.theme}>ThemeContextType</div>
        );
    }

}

export default ThemeContextType;