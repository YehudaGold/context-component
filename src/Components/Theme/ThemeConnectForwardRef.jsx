import PropTypes from 'prop-types';
import React, {Component} from 'react';

import ThemeContext from '../../Contexts/ThemeContext';
import Button from '../Generic/Button';

class ThemeConnectForwardRef extends Component {

    static propTypes = {
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.func.isRequired
    }

    toggleTheme = () => { this.props.toggleTheme(); }

    render() {
        const {toggleTheme, theme} = this.props;

        return (
            <div className={theme}>
                ThemeConnectForwardRef
                <Button handelClick={toggleTheme} text="toggle theme" />
            </div>
        );
    }

}

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default ThemeContext.connect(
    mapStateToProps,
    mapActionToProps,
    {forwardRef: true}
)(ThemeConnectForwardRef);