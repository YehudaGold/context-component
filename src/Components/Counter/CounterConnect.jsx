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
        const {counter, decrease, increase} = this.props;

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

const mapContextToProps = context => ({
    counter: context.counter,
    decrease: context.decrease,
    increase: context.increase
});

export default CounterContext.connect(CounterConnect, mapContextToProps);