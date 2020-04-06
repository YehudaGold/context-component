import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

class ThemeConnectWithProps extends PureComponent {

    static propTypes = {
        contextTheme: PropTypes.string.isRequired,
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.func.isRequired
    }

    render() {
        const {contextTheme, theme, toggleTheme} = this.props;

        return (
            <div className={theme}>
                ThemeConnectWithProps
                <p>{`context theme: ${contextTheme}`}</p>
                <Button handelClick={toggleTheme} text="toggle context theme" />
            </div>
        );
    }

}

const mapContextToProps = (context, ownProps) => ({
    contextTheme: context.theme,
    theme: ownProps.theme === 'dark' ? context.theme : ownProps.theme,
    toggleTheme: context.toggleTheme
});

export default ThemeContext.connect(ThemeConnectWithProps, mapContextToProps);