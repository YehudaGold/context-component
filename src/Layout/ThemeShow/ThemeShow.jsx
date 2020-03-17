import React, {Component} from 'react';
import {context} from '../../Contexts/Th';
export class ThemeShow extends Component {
    static contextType = context;

    render() {
        return <div className={this.context.theme}>
            sdfasfdasdfasd
        dfasd
        asdf
        asdfd
        </div>;
    }
}

export default ThemeShow;