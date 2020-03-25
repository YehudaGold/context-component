import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../Contexts/ThemeContext';
import ToggleTheme from './Actions/ToggleTheme';

class ThemeConnect extends PureComponent {

    static propTypes = {
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.func.isRequired
    }

    render() {
        const {toggleTheme, theme} = this.props;

        return (
            <div className={theme}>
                ThemeConnect
                <ToggleTheme toggleTheme={toggleTheme} />
            </div>
        );
    }

}

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default ThemeContext.connect(mapStateToProps, mapActionToProps)(ThemeConnect);