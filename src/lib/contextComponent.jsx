import React, {Component} from 'react';

import connect from './connect';
import {getDisplayName} from './utils/generics';
import getActions from './utils/getActions';

class ContextComponent extends Component {

    static get componentContext() {
        if (Object.prototype.hasOwnProperty.call(this, '_componentContext')) return this._componentContext;

        this._componentContext = React.createContext();
        this._componentContext.displayName = getDisplayName(this);

        return this._componentContext;
    }

    static get Consumer() { return this.componentContext.Consumer; }

    static connect(WrappedComponent, mapContextToProps, options) {
        return connect(
            WrappedComponent,
            [this],
            mapContextToProps && (([context], ownProps) => mapContextToProps(context, ownProps)),
            options
        );
    }

    constructor(props) {
        super(props);
        this.componentContext = this.constructor.componentContext;
    }

    render() {
        const {componentContext: {Provider}, props: {children}} = this;

        if (this.state !== this.lastState) {
            this.actions = this.actions || getActions(this, ContextComponent);
            this.contextValue = {...this.actions, ...this.state};
            this.lastState = this.state;
        }

        return (
            <Provider value={this.contextValue}>
                {children}
            </Provider>
        );
    }

}

export default ContextComponent;