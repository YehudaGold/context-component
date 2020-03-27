import React from 'react';

const contexts = {};

export const createContext = (key) => {
    contexts[key] = React.createContext();
    contexts[key].displayName = key;

    return contexts[key];
};

export const getContext = key => contexts[key] || createContext(key);