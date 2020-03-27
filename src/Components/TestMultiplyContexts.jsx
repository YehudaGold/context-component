import React from 'react';

import CounterContext from '../Contexts/CounterContext';
import ThemeContext from '../Contexts/ThemeContext';
import MultipleConnect from './Multiple/MultipleConnect';

const TestMultipleContexts = () =>
    <ThemeContext>
        <CounterContext>
            <div className="consumers-list">
                TestMultipleContexts - test connect([ThemeContext, CounterContext]) api
                <MultipleConnect />
            </div>
        </CounterContext>
    </ThemeContext>;

export default TestMultipleContexts;