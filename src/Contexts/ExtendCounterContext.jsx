import CounterContext from './CounterContext';

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