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

    constructor(props) {
        super(props);

        const contextName = this.constructor.name;
        this.componentContext = getContext(contextName);
    }

    static connect() { return createConnectFunction(getContext(this.name)); }

    static Consumer() { return getContext(this.name).Consumer; }

    static componentContext() { return getContext(this.name); }

    render() {
        const {componentContext, props: {children}, state} = this,
              actions = this.actions || (this.actions = getActions(this, ContextComponent));

        return (
            <componentContext.Provider value={{state, actions}}>
                {children}
            </componentContext.Provider>);
    }

}