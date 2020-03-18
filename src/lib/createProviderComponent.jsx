import React from 'react';

const defaultComponentFunctions = ['state', ...Object.keys(new React.Component())];

export const createProviderComponent = (Provider, contextClass) =>
    class ProviderComponent extends contextClass {
        constructor(props) {
            super(props);

            Object.keys(this)
                .filter(componentFunction => !defaultComponentFunctions.includes(componentFunction))
                .forEach((contextFunction) => {
                    this.state[contextFunction] = this[contextFunction];
                });
        }

        render() {
            return (
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            );
        }
    };