import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import ExtendCounterContext from '../../Contexts/ExtendCounterContext';
import Button from '../Generic/Button';

class ExtendCounterConnect extends PureComponent {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        decrease: PropTypes.func.isRequired,
        increase: PropTypes.func.isRequired,
        setToZero: PropTypes.func.isRequired
    }

    render() {
        const {counter, increase, decrease, setToZero} = this.props;

        return (
            <div className="dark">
                ExtendCounterConnect
                <div className="value">{`value: ${counter}`}</div>
                <Button handelClick={increase} text="increase" />
                <Button handelClick={decrease} text="decrease (override to-2)" />
                <Button handelClick={setToZero} text="setToZero (extended)" />
            </div>
        );
    }

}

const mapStateToProps = state => ({counter: state.counter}),
      mapActionToProps = actions => ({
          increase: actions.increase,
          decrease: actions.decrease,
          setToZero: actions.setToZero
      });

export default ExtendCounterContext.connect(mapStateToProps, mapActionToProps)(ExtendCounterConnect);