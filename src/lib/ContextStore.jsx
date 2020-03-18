import React from 'react';

const contexts = {};

export const createContext = (contextName) => {
    if (!contexts[contextName]) contexts[contextName] = React.createContext();
    console.log('contexts', contexts)
    return contexts[contextName];
};

export const getContext = contextName => contexts[contextName];