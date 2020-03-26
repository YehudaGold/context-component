/* eslint-disable max-classes-per-file */
import {ContextComponent} from '../lib/contextComponent';

class CounterContext extends ContextComponent {

    state = {counter: 0};

    constructor(props) {
        super(props);

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState(state => ({counter: state.counter + 1}));
    }

    decrease() {
        this.setState(state => ({counter: state.counter - 1}));
    }

    // Fun() { console.log(this); }

    // arrowFun = () => { console.log(this); }

    // extendsFun() { console.log(this); }

    /*
     * async func() {
     *     this.setState({theme: 'dark'});
     * }
     */

}

export default class ExtendCounterContext extends CounterContext {

    constructor(props) {
        super(props);

        this.setToZero = this.setToZero.bind(this);
    }

    decrease() {
        this.setState(state => ({counter: state.counter - 2}));
    }

    setToZero() {
        this.setState({counter: 0});
    }

}