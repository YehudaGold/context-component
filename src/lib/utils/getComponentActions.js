import {getAllMethodNames} from './generics';

const reactLifecycleMethodsNames = [
    'componentDidMount',
    'shouldComponentUpdate',
    'render',
    'getSnapshotBeforeUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
    'componentDidCatch'
];

export default (componentInstance, BaseClass) => {
    const actions = {};

    getAllMethodNames(componentInstance, BaseClass)
        .filter(componentMethodNames => !reactLifecycleMethodsNames.includes(componentMethodNames))
        .forEach((contextActionNames) => {
            actions[contextActionNames] = componentInstance[contextActionNames];
        });

    return actions;
};