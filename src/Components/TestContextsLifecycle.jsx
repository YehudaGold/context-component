import React, {useState, useCallback} from 'react';

import TimeContext from '../Contexts/TimeContext';
import Button from './Generic/Button';
import TimeConnect from './Time/TimeConnect';

const TestContextsLifecycle = () => {
    const [showTimeContext, setShowTimeContext] = useState(false),
          toggleShowTimeContext = useCallback(
              () => setShowTimeContext(!showTimeContext),
              [showTimeContext]
          );

    return (
        <div className="list">
            TestContextsLifecycle - test TimerContext with lifecycle methods to initialize state
            <Button
                handelClick={toggleShowTimeContext}
                text={showTimeContext ? 'unmount TimeContext' : 'mount TimeConnect'}
            />
            {
                showTimeContext
                    ? (
                        <TimeContext>
                            <TimeConnect />
                        </TimeContext>
                    )
                    : 'TimeContext is unmounted'
            }
        </div>
    );
};

export default TestContextsLifecycle;