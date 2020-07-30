import {getAllMethodNames} from './generics';

const reactLifecycleMethods = [
    'componentDidCatch',
    'componentDidMount',
    'componentDidUpdate',
    'componentWillUnmount',
    'getSnapshotBeforeUpdate',
    'render',
    'shouldComponentUpdate'
];

export default (componentInstance, BaseClass) => {
    const actions = {};

    getAllMethodNames(componentInstance, BaseClass)
        .filter(componentMethodNames => !reactLifecycleMethods.includes(componentMethodNames))
        .filter(componentMethodNames => !componentMethodNames.startsWith('_'))
        .forEach((contextActionNames) => {
            actions[contextActionNames] = componentInstance[contextActionNames];
        });

    return actions;
};