import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import CounterContext from '../../Contexts/CounterContext';
import Button from '../Generic/Button';

class CounterConnect extends PureComponent {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        decrease: PropTypes.func.isRequired,
        increase: PropTypes.func.isRequired
    }

    render() {
        const {counter, increase, decrease} = this.props;

        return (
            <div className="dark">
                CounterConnect
                <div className="value">{`value: ${counter}`}</div>
                <Button handelClick={increase} text="increase" />
                <Button handelClick={decrease} text="decrease" />
            </div>
        );
    }

}

const mapStateToProps = state => ({counter: state.counter}),
      mapActionToProps = actions => ({
          increase: actions.increase,
          decrease: actions.decrease
      });

export default CounterContext.connect(mapStateToProps, mapActionToProps)(CounterConnect);