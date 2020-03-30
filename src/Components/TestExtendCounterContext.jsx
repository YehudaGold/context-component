import React from 'react';

import CounterContext from '../Contexts/CounterContext';
import ExtendCounterContext from '../Contexts/ExtendCounterContext';
import CounterConnect from './Counter/CounterConnect';
import ExtendCounterConnect from './Counter/ExtendCounterConnect';

const TestExtendCounterContext = () =>
    <div className="consumers-list">
        <CounterContext>
            <ExtendCounterContext>
                TestExtendCounterContext - test contextComponent of inherent class:  <br />
                inherent class have all actions automatically <br />
                inherent class have different context object from base class
                <ExtendCounterConnect />
                <CounterConnect />
            </ExtendCounterContext>
        </CounterContext>
    </div>;

export default TestExtendCounterContext;