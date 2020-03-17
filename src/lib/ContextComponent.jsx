import React, {Component} from 'react';

export class ContextComponent extends Component {
    constructor(props) {
        super(props);

        const context = React.createContext();
        this.context = context;
        this.Provider = context.Provider;
        this.Consumer = context.Consumer;
    }

    render() {
        const {children} = this.props;

        return (
          <this.Consumer>
            {children}
          </this.Consumer>
        );
    }
}

export default ContextComponent;