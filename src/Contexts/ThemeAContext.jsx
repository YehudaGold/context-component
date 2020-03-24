/* eslint-disable max-classes-per-file */
import {ContextComponent, createHelpers} from '../lib/contextComponent';

export class ThemeAContext extends ContextComponent {

    state = {theme: 'dark', size: 10};

    setTheme = (Size) => {
        this.setState({Size});
    }

    fun() { console.log(this); }

    arrowFun =() => { console.log(this); }

    extendsFun() { console.log(this); }

}


export class ThemeBContext extends ThemeAContext {

    state = {theme: 'dark', size: 10};

    extendsFun() { console.log(this); }

    /*
     * Actions = {
     *     setTheme: (Size) => {
     *         this.setState({Size});
     *     }
     * };
     */

}

export default createHelpers(ThemeAContext);