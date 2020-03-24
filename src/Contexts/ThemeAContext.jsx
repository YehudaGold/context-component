/* eslint-disable max-classes-per-file */
import {ContextComponent} from '../lib/contextComponent';

class ThemeAContext extends ContextComponent {

    state = {theme: 'dark', size: 10};

    setTheme = (Size) => {
        this.setState({Size});
    }

    fun() { console.log(this); }

    arrowFun =() => { console.log(this); }

    extendsFun() { console.log(this); }

}


export default class ThemeBContext extends ThemeAContext {

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

export const {connect, Consumer, componentContext} = ThemeBContext;
console.log(new ThemeBContext());