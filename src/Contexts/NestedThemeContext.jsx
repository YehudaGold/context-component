import ContextComponent from '../lib';

export default class NestedThemeContext extends ContextComponent {

    state = {theme: {background: 'dark'}}

    toggleTheme = () => {
         // Not changing the object to not cause rerender
        this.setState((state) => {
            if (state.theme.background === 'dark') state.theme.background = 'light';
            else state.theme.background = 'dark';

            return state;
        });
    }

}