const createMemo = () => {
    let lastDependencies = [],
        value;

    return (factory, dependencies) => {
        if (lastDependencies.length === dependencies.length
             && dependencies.every((dep, index) => dep === lastDependencies[index])) return value;

        lastDependencies = dependencies;
        value = factory();

        return value;
    };
};

export default createMemo;