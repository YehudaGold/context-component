import React, {Component} from 'react';

import createComponentConnect from './createComponentConnect';
import getComponentActions from './utilities/getComponentActions';

class ContextComponent extends Component {

    static get componentContext() {
        if (Object.getOwnPropertyDescriptor(this, '_componentContext')) return this._componentContext;

        this._componentContext = React.createContext();
        this._componentContext.displayName = this.name;

        return this._componentContext;
    }

    static get Consumer() { return this.componentContext.Consumer; }

    static connect(mapContextToProps, mapActionsToProps) {
        return createComponentConnect(this.componentContext, mapContextToProps, mapActionsToProps);
    }

    constructor(props) {
        super(props);
        this.componentContext = this.constructor.componentContext;
    }

    render() {
        const {componentContext, props: {children}, state} = this,
              actions = this.actions || (this.actions = getComponentActions(this, ContextComponent));

        return (
            <componentContext.Provider value={{state, actions}}>
                {children}
            </componentContext.Provider>
        );
    }

}

export default ContextComponent;