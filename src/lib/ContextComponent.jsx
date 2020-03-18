import React from 'react';
import {createConnectFunction} from './createConnectFunction';
import {createProviderComponent} from './createProviderComponent';
// Import {createContext, getContext} from './ContextStore';


export const createContext = (contextClass) => {
    const context = React.createContext();

    const component = {
        connect: createConnectFunction(context),
        Consumer: context.Consumer,
        context,
        Provider: createProviderComponent(context.Provider, contextClass)
    };

    return component;
};