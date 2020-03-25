import React, {Component} from 'react';

import {createConnectFunction} from './helpers';
import {getAllMethodNames} from './utility';
import {getContext} from './contextsStorage';
import {reactLifecycleNames} from './config';

const getActions = (componentInstance, BaseClass) => {
    const actions = {};

    getAllMethodNames(componentInstance, BaseClass)
        .filter(componentFunction => !reactLifecycleNames.includes(componentFunction))
        .forEach((contextFunction) => {
            actions[contextFunction] = componentInstance[contextFunction];
        });

    return actions;
};

export class ContextComponent extends Component {

    static connect(mapContextToProps, mapActionsToProps) {
        return createConnectFunction(this.componentContext)(mapContextToProps, mapActionsToProps);
    }

    static get Consumer() { return this.componentContext.Consumer; }

    static get componentContext() { return getContext(this.name); }

    constructor(props) {
        super(props);
        this.componentContext = this.constructor.componentContext;
    }

    render() {
        const {componentContext, props: {children}, state} = this,
              actions = this.actions || (this.actions = getActions(this, ContextComponent));

        return (
            <componentContext.Provider value={{state, actions}}>
                {children}
            </componentContext.Provider>);
    }

}