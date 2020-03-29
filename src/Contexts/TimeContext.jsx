import ContextComponent from '../lib';

const intervalTime = 1000; // 1sec

export default class TimeContext extends ContextComponent {

    state = {timeFromMount: 0}

    componentDidMount() {
        this.mountTime = Date.now();
        this.timerID = setInterval(
            () => this.tick(),
            intervalTime
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({timeFromMount: Date.now() - this.mountTime});
    }

    // Remove tick from the context actions by setting action manually
    actions={}

}