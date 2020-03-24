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

    static connect = createConnectFunction(this.componentContext)

    static Consumer = getContext(this.constructor.name).Consumer

    static componentContext = getContext(this.constructor.name)

    render() {
        const {componentContext, children, state} = this,
              actions = this.actions || (this.actions = getActions(this, ContextComponent));

        return (
            <componentContext.Provider value={{state, actions}}>
                {children}
            </componentContext.Provider>);
    }

}


export const createHelpers = (componentClass) => {
    const context = getContext(componentClass.name);

    return {
        getContext: () => context,
        Consumer: context.Consumer,
        connect: ''
    };
};