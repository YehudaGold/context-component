/* eslint-disable max-classes-per-file */
import {ContextComponent} from '../lib/contextComponent';

class CounterContext extends ContextComponent {

    state = {counter: 0};

    increase = () => {
        this.setState(state => ({counter: state.counter + 1}));
    }

    decrease = () => {
        this.setState(state => ({counter: state.counter - 1}));
    }

    fun() { console.log(this); }

    arrowFun = () => { console.log(this); }

    extendsFun() { console.log(this); }

    async func() {
        this.setState({theme: 'dark'});
    }

}

export default class ExtendCounterContext extends CounterContext {

    // State = {counter: 0};

    extendsFun() { console.log(this); }

    /*
     * Actions = {
     *     toggleTheme: (Size) => {
     *         this.setState({Size});
     *     }
     * };
     */

}