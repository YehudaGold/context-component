import {ContextComponent} from '../lib/ContextComponent';

export class ThemeContext extends ContextComponent {
    state = {theme: 'dark', size: 10}

    setTheme = (theme) => {
        this.setState({theme});
    }
}