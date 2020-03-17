import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
export class ThemeShow extends Component {
    render() {
        return (
          <ThemeContext>
            {context => <div className={context} >sdf asdf asdf asdf asdf asfd a asdf </div>}
          </ThemeContext>);
    }
}

export default ThemeShow;