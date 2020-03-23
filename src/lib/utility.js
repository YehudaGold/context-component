// Code from http://code.fitness/post/2016/01/javascript-enumerate-methods.html

function hasMethod(obj, name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);

    return !!desc && typeof desc.value === 'function';
}

export function getInstanceMethodNames(obj, stop) {
    const array = [];
    let proto = (obj);

    while (proto && proto !== stop.prototype) {
        Object.getOwnPropertyNames(proto).forEach((name) => {
            if (name !== 'constructor') {
                if (hasMethod(proto, name)) {
                    array.push(name);
                }
            }
        });
        proto = Object.getPrototypeOf(proto);
    }

    return array;
}