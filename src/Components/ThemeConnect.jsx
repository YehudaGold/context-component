import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../Contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';

class ThemeConnect extends PureComponent {
    static propTypes = {
        setTheme: PropTypes.func.isRequired,
        theme: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className={this.props.theme}>
                ThemeConnect
                <ToggleTheme setTheme={this.props.setTheme} theme={this.props.theme} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

const mapActionToProps = actions => ({
    setTheme: actions.setTheme
});

export default ThemeContext.connect(mapStateToProps, mapActionToProps)(ThemeConnect);