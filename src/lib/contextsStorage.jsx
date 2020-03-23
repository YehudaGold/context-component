import React from 'react';

const contexts = {};

export const getContext = (key) => {
    if (contexts[key]) return contexts[key];

    contexts[key] = React.createContext();
    contexts[key].displayName = key;

    return contexts[key];
};