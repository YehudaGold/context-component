import React, {Component} from 'react';
import {createContext, getContext} from './ContextStore';

export class ContextComponent extends Component {
  static connect = (mapStateToProps) => {
      console.log(mapStateToProps);
      return connectedComponent => <connectedComponent {...mapStateToProps} />;
  }

  static Consumer(props) {
      console.log(this);
      const context = getContext(ContextComponent);
      return <context.Consumer {...props} />;
  }

  constructor(props) {
      super(props);

      const context = createContext(ContextComponent);

      this.Provider = context.Provider;
      this.Consumer = context.Consumer;
      console.log(context);
      ContextComponent.context = context;
  }

  render() {
      const {children} = this.props;

      return (
          <this.Provider value={this.state}>
              {children}
          </this.Provider>
      );
  }
}
console.log({ContextComponent});
export default ContextComponent;