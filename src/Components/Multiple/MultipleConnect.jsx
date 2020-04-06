import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import CounterContext from '../../Contexts/CounterContext';
import ThemeContext from '../../Contexts/ThemeContext';
import {connect} from '../../lib';
import Button from '../Generic/Button';

class MultipleConnect extends PureComponent {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        decrease: PropTypes.func.isRequired,
        increase: PropTypes.func.isRequired,
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.func.isRequired
    }

    render() {
        const {counter, decrease, increase, theme, toggleTheme} = this.props;

        return (
            <div className={theme}>
                MultipleConnect
                <div className="value">{`value: ${counter}`}</div>
                <Button handelClick={increase} text="increase" />
                <Button handelClick={decrease} text="decrease" />
                <Button handelClick={toggleTheme} text="toggle theme" />
            </div>
        );
    }

}

const mapContextsToProps = ([counterContext, themeContext]) => ({
    counter: counterContext.counter,
    decrease: counterContext.decrease,
    increase: counterContext.increase,
    theme: themeContext.theme,
    toggleTheme: themeContext.toggleTheme
});

export default connect([CounterContext, ThemeContext], mapContextsToProps)(MultipleConnect);