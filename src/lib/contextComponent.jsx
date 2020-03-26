import React, {Component} from 'react';

import {reactLifecycleMethodsNames} from './config';
import {getContext} from './contextsStorage';
import createConnectFunction from './createConnectFunction';
import {getAllMethodNames} from './utility';

const getActions = (componentInstance, BaseClass) => {
    const actions = {};

    getAllMethodNames(componentInstance, BaseClass)
        .filter(componentMethodNames => !reactLifecycleMethodsNames.includes(componentMethodNames))
        .forEach((contextActionNames) => {
            actions[contextActionNames] = componentInstance[contextActionNames];
        });

    return actions;
};

export default class ContextComponent extends Component {

    static get componentContext() { return getContext(this.name); }

    static get Consumer() { return this.componentContext.Consumer; }

    static connect(mapContextToProps, mapActionsToProps) {
        return createConnectFunction(this.componentContext)(mapContextToProps, mapActionsToProps);
    }

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