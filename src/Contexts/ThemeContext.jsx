/* eslint-disable react/no-unused-state */
import {ContextComponent} from '../lib/contextComponent';

export default class ThemeContext extends ContextComponent {

    state = {theme: 'dark'}

    toggleTheme = () => {
        this.setState(state => (state.theme === 'dark' ? {theme: 'light'} : {theme: 'dark'}));
    }

}