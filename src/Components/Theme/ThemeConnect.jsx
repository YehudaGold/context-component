import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

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
                <Button handelClick={toggleTheme} text="toggle theme" />
            </div>
        );
    }

}

const mapContextToProps = context => ({
    theme: context.theme,
    toggleTheme: context.toggleTheme
});

export default ThemeContext.connect(ThemeConnect, mapContextToProps);