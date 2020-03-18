import React from 'react';
export const createConsumerComponent = Consumer =>
    // Named react component for displaying in the components tree
    function ConnectedComponent({children}) {
        return (
            <Consumer>{children}</Consumer>
        );
    }