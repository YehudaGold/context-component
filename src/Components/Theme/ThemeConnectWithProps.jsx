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
                ThemeConnectWithProps - dark only if both context and props dark
                <Button handelClick={toggleTheme} text={`set context theme ${contextTheme === 'dark' ? 'light' : 'dark'}`} />
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    contextTheme: state.theme,
    theme: ownProps.theme === 'dark' ? state.theme : ownProps.theme
}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default ThemeContext.connect(mapStateToProps, mapActionToProps)(ThemeConnectWithProps);