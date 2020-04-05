import {getAllMethodNames} from './generics';

const reactLifecycleMethods = [
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
        .filter(componentMethodNames => !reactLifecycleMethods.includes(componentMethodNames))
        .filter(componentMethodNames => !componentMethodNames.startsWith('_'))
        .forEach((contextActionNames) => {
            actions[contextActionNames] = componentInstance[contextActionNames];
        });

    return actions;
};