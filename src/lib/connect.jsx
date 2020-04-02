/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import {getDisplayName} from './utilities/generics';


const connect = (ContextComponents, mapStateToProps = () => {}, mapActionsToProps = () => {}, options) =>
    (WrappedComponent) => {
        const finalOptions = {pure: true, ...options},
              WrappedComponentName = getDisplayName(WrappedComponent);

        if (finalOptions.pure) WrappedComponent = React.memo(WrappedComponent);

        const Connect = ContextComponents.reduceRight(
            (ChildConnect, ContextComponent, index) => {
                const ConsumeContext = ({contexts = {state: [], actions: []}, ...props}) => {
                    const {actions, state} = useContext(ContextComponent.componentContext);
                    contexts.state[index] = state;
                    contexts.actions[index] = actions;

                    if (ChildConnect) {
                        return <ChildConnect contexts={contexts} {...props} />;
                    }

                    return (
                        <WrappedComponent
                            {...props}
                            {...mapStateToProps(contexts.state, props)}
                            {...mapActionsToProps(contexts.actions, props)}
                        />
                    );
                };
                ConsumeContext.displayName = `connect[${getDisplayName(ContextComponent)}](${WrappedComponentName})`;
                ConsumeContext.propTypes = {contexts: PropTypes.object};

                return ConsumeContext;
            },
            null
        );

        if (finalOptions.pure) return React.memo(Connect);

        return Connect;
    };

export default connect;