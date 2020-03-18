import React, {PureComponent} from 'react';
import ThemeContext from '../Contexts/ThemeContext';

class ThemeConnect extends PureComponent {
    render() {
        return (
            <div className={this.props.theme}>
            ThemeConnect
            </div>
        );
    }
}

const mapContextToProps = context => ({
    theme: context.theme
});

export default ThemeContext.connect(mapContextToProps)(ThemeConnect);