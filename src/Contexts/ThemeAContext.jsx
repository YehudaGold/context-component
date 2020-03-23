/* eslint-disable max-classes-per-file */
import {contextComponent, createHelpers} from '../lib/contextComponent';
export class ThemeAContext extends contextComponent {
    state = {theme: 'dark', size: 10};

    dddad() { console.log(this); }

    ddsdd() { console.log(this); }

    ddda() { console.log(this); }

    // Actions = {2
        setTheme= (Size) => {
            this.setState({Size});
        }
    // };
}


export class ThemeBContext extends ThemeAContext {
    state = {theme: 'dark', size: 10};

    dddd() { console.log(this); }



    // Actions = {2
        setTheme= (Size) => {
            this.setState({Size});
        }
    // };
}

export default createHelpers(ThemeAContext);