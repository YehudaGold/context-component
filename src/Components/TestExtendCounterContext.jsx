import React from 'react';
import ExtendCounterContext from '../Contexts/ExtendCounterContext';

const TestExtendCounterContext = () =>
    <ExtendCounterContext>
        ExtendCounterContext
        <div className="consumers-list" />
    </ExtendCounterContext>;

export default TestExtendCounterContext;