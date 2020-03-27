import React from 'react';

import CounterContext from '../Contexts/CounterContext';
import ThemeContext from '../Contexts/ThemeContext';
import {Provider} from '../lib';
import MultipleConnect from './Multiple/MultipleConnect';

const TestMultipleContexts = () =>
    <Provider ContextComponents={[CounterContext, ThemeContext]}>
        <div className="consumers-list">
            TestMultipleContexts - test Provider/connect to multiple components api
            <MultipleConnect />
        </div>
    </Provider>;

export default TestMultipleContexts;