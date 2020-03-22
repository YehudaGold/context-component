import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../Contexts/ThemeContext';

class ThemeConnect extends PureComponent {
    static propTypes = {
        theme: PropTypes.string.isRequired
    }

    render() {
        return <div className={this.props.theme}>ThemeConnect</div>;
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

export default ThemeContext.connect(mapStateToProps)(ThemeConnect);