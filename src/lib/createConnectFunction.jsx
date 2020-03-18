import React, {useContext} from 'react';

export const createConnectFunction = context =>
    (mapContextToProps = () => {}) =>
        WrappedComponent =>
            // Named react component for displaying in the components tree
            function ConnectComponent(props) {
                const contextValue = useContext(context);
                return <WrappedComponent {...mapContextToProps(contextValue)} {...props} />;
            };