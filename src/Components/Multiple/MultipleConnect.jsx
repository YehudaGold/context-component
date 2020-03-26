import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import CounterContext from '../../Contexts/CounterContext';
import ThemeContext from '../../Contexts/ThemeContext';
import {connect} from '../../lib';
import Button from '../Counter/Actions/Button';
import ToggleTheme from '../Theme/Actions/ToggleTheme';

class MultipleConnect extends PureComponent {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        decrease: PropTypes.func.isRequired,
        increase: PropTypes.func.isRequired,
        theme: PropTypes.string.isRequired,
        toggleTheme: PropTypes.func.isRequired
    }

    render() {
        const {counter, increase, decrease, toggleTheme, theme} = this.props;

        return (
            <div className={theme}>
                MultipleConnect
                <div className="value">{`value: ${counter}`}</div>
                <Button handelClick={increase} text="increase" />
                <Button handelClick={decrease} text="decrease" />
                <ToggleTheme toggleTheme={toggleTheme} />
            </div>
        );
    }

}

const mapStateToProps = ({CounterContext, ThemeContext}) => ({
    counter: CounterContext.counter,
    theme: ThemeContext.theme
}),
      mapActionToProps = ({CounterContext, ThemeContext}) => ({
          increase: CounterContext.increase,
          decrease: CounterContext.decrease,
          toggleTheme: ThemeContext.toggleTheme
      });

export default connect(
    [ThemeContext, CounterContext],
    mapStateToProps,
    mapActionToProps
)(MultipleConnect);