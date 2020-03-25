/* eslint-disable react/no-unused-state */
import {ContextComponent} from '../lib/contextComponent';

export default class ThemeContext extends ContextComponent {

    state = {theme: 'dark', size: 10}

    toggleTheme = () => {
        this.setState(state => (state.theme === 'dark' ? {theme: 'light'} : {theme: 'dark'}));
    }

    setSize = (Size) => {
        this.setState({Size});
    }

    async func() {
        this.setState({theme: 'dark'});
    }

    /*
     * Actions = {
     *     toggleTheme: (Size) => {
     *         this.setState({Size});
     *     },
     *     setSize: this.setSize
     * }
     */

}