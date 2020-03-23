import React, {Component} from 'react';
import {createConnectFunction} from './helpers';
import {getContext} from './contextsStorage';
import {getInstanceMethodNames} from './utility';

const getActions = (componentInstance, stop) => {
    const actions = {};
    console.log(getInstanceMethodNames(componentInstance, stop));

    getInstanceMethodNames(componentInstance, Component)
        .forEach((contextFunction) => {
            actions[contextFunction] = componentInstance[contextFunction];
        });

    return actions;
};

export class contextComponent extends Component {
    constructor(props) {
        super(props);

        const contextName = this.constructor.name;
        this.componentContext = getContext(contextName);
    }

    render() {
        const {componentContext} = this;
        console.log(this);
        const actions = this.actions || (this.actions = getActions(this, contextComponent));

        return (
            <componentContext.Provider value={{state: this.state, actions}}>
                {this.props.children}
            </componentContext.Provider>);
    }
}


export const createHelpers = (componentClass) => {
    const context = getContext(componentClass.name);

    return {
        getContext: () => context,
        Consumer: context.Consumer,
        connect: createConnectFunction(context)
    };
};