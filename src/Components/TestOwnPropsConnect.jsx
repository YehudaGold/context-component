import React, {useState, useCallback} from 'react';

import ThemeContext from '../Contexts/ThemeContext';
import Button from './Generic/Button';
import ThemeConnectWithProps from './Theme/ThemeConnectWithProps';

const TestOwnPropsConnect = () => {
    const [themeProp, setThemeProp] = useState('dark'),
          toggleThemeProp = useCallback(
              () => setThemeProp(themeProp === 'dark' ? 'light' : 'dark'),
              [themeProp]
          );

    return (
        <div className="consumers-list">
            TestOwnPropsConnect - test connect with callback (state, ownProp) =&gt; Object, get ownProp
            <Button
                handelClick={toggleThemeProp}
                text={themeProp === 'dark' ? 'set prop theme light' : 'set prop theme dark'}
            />
            <ThemeContext>
                <ThemeConnectWithProps theme={themeProp} />
            </ThemeContext>
        </div>
    );
};

export default TestOwnPropsConnect;