import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import NestedThemeContext from '../../Contexts/NestedThemeContext';
import Button from '../Generic/Button';

class NestedThemeConnect extends PureComponent {

    static propTypes = {
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.func.isRequired
    }

    render() {
        const {toggleTheme, theme} = this.props;

        return (
            <div className={theme.background}>
                NestedThemeConnect
                <Button handelClick={toggleTheme} text="toggle theme.background" />
            </div>
        );
    }

}

const mapStateToProps = state => ({theme: state.theme}),
      mapActionToProps = actions => ({toggleTheme: actions.toggleTheme});

export default NestedThemeContext.connect(mapStateToProps, mapActionToProps)(NestedThemeConnect);