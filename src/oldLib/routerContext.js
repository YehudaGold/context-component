import React from 'react';
import {Router, withRouter} from 'react-router-dom';

import {history} from 'utils/history';
import {registerComponent} from './contextManager';

const CONTEXT_NAME = 'router';

const component = {
    Provider: ({children}) => (<Router history={history}>{children}</Router>),

    connect: WrappedComponent => withRouter(({
        context, history, location, match, ...rest
    }) => {
        if (!context) {
            context = {};
        }

        context[CONTEXT_NAME] = {history, location, match};
        return <WrappedComponent context={context} {...rest} />;
    })
};

registerComponent(CONTEXT_NAME, component);