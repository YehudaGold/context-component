import React from 'react';

import {Provider} from '../../../src';
import CounterContext from '../Contexts/CounterContext';
import ThemeContext from '../Contexts/ThemeContext';
import MultipleConnect from './Multiple/MultipleConnect';

const TestMultipleContexts = () => (
    <Provider ContextComponents={[CounterContext, ThemeContext]}>
        <div className="list">
            TestMultipleContexts - test Provider/connect to multiple components [CounterContext, ThemeContext] api
            <MultipleConnect />
        </div>
    </Provider>
);

export default TestMultipleContexts;