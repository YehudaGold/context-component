/* eslint-disable react/no-unused-state */
import {ContextComponent} from '../lib/contextComponent';

export default class ThemeContext extends ContextComponent {

    state = {theme: 'dark', size: 10}

    setTheme = (theme) => {
        console.log(this);
        this.setState({theme});
    }

    setSize = (Size) => {
        this.setState({Size});
    }

    dddd() {}

    /*
     * Actions = {
     *     setTheme: (Size) => {
     *         this.setState({Size});
     *     },
     *     setSize: this.setSize
     * }
     */

}