import ContextComponent from '../lib';

export default class NestedThemeContext extends ContextComponent {

    state = {theme: {background: 'dark'}}

    toggleTheme = () => {
        this.setState(state => (
            state.theme.background === 'dark'
                ? {theme: {background: 'light'}}
                : {theme: {background: 'dark'}}
        ));
    }

}