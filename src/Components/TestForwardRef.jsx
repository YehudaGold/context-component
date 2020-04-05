import React, {useRef, useCallback} from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import Button from './Generic/Button';
import ThemeConnectForwardRef from './Theme/ThemeConnectForwardRef';

const TestForwardRef = () => {
    const ref = useRef(),
          toggleTheme = useCallback(() => {
              ref.current.toggleTheme();
          }, []);

    return (
        <div className="list">
            TestForwardRef - test connect() forwardRef option
            <Button
                handelClick={toggleTheme}
                text="toggle theme through ThemeConnectForwardRef"
            />
            <ThemeContext>
                <ThemeConnectForwardRef ref={ref} />
            </ThemeContext>
        </div>
    );
};

export default TestForwardRef;