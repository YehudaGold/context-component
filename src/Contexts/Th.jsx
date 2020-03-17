import React, {Component} from 'react';
export const context = React.createContext();
export class Th extends Component {
    state = {theme: 'light', size: 10}


    render() {
        return (
          <context.Provider value={this.state}>
            {this.props.children}
          </context.Provider>
        );
    }
}