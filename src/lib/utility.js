// Code idea from http://code.fitness/post/2016/01/javascript-enumerate-methods.html

// Check for a method without running get property`s
export const hasMethod = (object, methodName) => {
    const descriptor = Object.getOwnPropertyDescriptor(object, methodName);

    return !!descriptor && typeof descriptor.value === 'function';
};

// Collecting all method names from the object prototype, stopping on baseClass prototype if exist
export const getAllMethodNames = (object, baseClass) => {
    const uniqMethodNames = new Set(),
          baseProto = baseClass ? baseClass.prototype : null;

    for (let proto = object; proto && proto !== baseProto; proto = Object.getPrototypeOf(proto)) {
        Object.getOwnPropertyNames(proto).forEach((propertyName) => {
            if (propertyName !== 'constructor' && hasMethod(proto, propertyName)) {
                uniqMethodNames.add(propertyName);
            }
        });
    }

    return [...uniqMethodNames];
};

// Collecting all methods from the object prototype, stopping on baseClass prototype if exist
export const getAllMethods = (object, baseClass) => {
    const uniqMethods = {},
          baseProto = baseClass ? baseClass.prototype : null;

    for (let proto = object; proto && proto !== baseProto; proto = Object.getPrototypeOf(proto)) {
        Object.getOwnPropertyNames(proto).forEach((propertyName) => {
            if (propertyName !== 'constructor' && hasMethod(proto, propertyName)) {
                uniqMethods[propertyName] = object[propertyName];
            }
        });
    }

    return uniqMethods;
};