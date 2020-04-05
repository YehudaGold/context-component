import React, {Component} from 'react';

import connect from './connect';
import createMemo from './utils/createMemo';
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

    static connect(mapStateToProps, mapActionsToProps, options) {
        return connect(
            [this],
            mapStateToProps && (([state], ownProps) => mapStateToProps(state, ownProps)),
            mapActionsToProps && (([actions], ownProps) => mapActionsToProps(actions, ownProps)),
            options
        );
    }

    constructor(props) {
        super(props);
        this.componentContext = this.constructor.componentContext;
        this._contextValueMemo = createMemo();
    }

    render() {
        const {componentContext: {Provider}, props: {children}, state} = this,
              contextValue = this._contextValueMemo(() => {
                  this.actions = this.actions || getActions(this, ContextComponent);

                  return {actions: this.actions, state};
              }, [state]);

        return (
            <Provider value={contextValue}>
                {children}
            </Provider>
        );
    }

}

export default ContextComponent;