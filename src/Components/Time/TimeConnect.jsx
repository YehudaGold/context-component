import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import TimeContext from '../../Contexts/TimeContext';

class TimeConnect extends PureComponent {

    static propTypes = {
        timeFromMount: PropTypes.string.isRequired
    }

    render() {
        const {timeFromMount} = this.props;

        return (
            <div className="dark">
                {`ThemeConnect -  time from mount ${timeFromMount / 1000}sec`}
            </div>
        );
    }

}

const mapStateToProps = state => ({timeFromMount: state.timeFromMount});

export default TimeContext.connect(mapStateToProps)(TimeConnect);