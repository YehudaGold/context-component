import React from 'react';

import ExtendCounterContext from '../Contexts/ExtendCounterContext';
import CounterConnect from './Counter/CounterConnect';

const TestExtendCounterContext = () =>
    <ExtendCounterContext>
        <div className="consumers-list">
            ExtendCounterContext - test contextComponent of inherent class have all inherent actions automatically
            <CounterConnect />
        </div>
    </ExtendCounterContext>;

export default TestExtendCounterContext;