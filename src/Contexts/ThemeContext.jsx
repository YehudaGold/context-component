import {ContextComponent} from '../lib/ContextComponent';

export class ThemeContext extends ContextComponent {
    state = {theme: 'light', size: 10}

    setTheme = (theme) => {
        this.setState({theme});
    }
}