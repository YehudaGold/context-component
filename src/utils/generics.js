// Check for a method without running get property`s
const hasMethod = (object, methodName) => {
    const descriptor = Object.getOwnPropertyDescriptor(object, methodName);

    return !!descriptor && typeof descriptor.value === 'function';
};

// Collecting all method names from the object prototype, stopping on baseClass prototype if exist
export const getAllMethodNames = (object, BaseClass) => {
    const uniqMethodNames = new Set(),
          BaseProto = BaseClass ? BaseClass.prototype : null;

    for (let proto = object; proto && proto !== BaseProto; proto = Object.getPrototypeOf(proto)) {
        Object.getOwnPropertyNames(proto).forEach((propertyName) => {
            if (propertyName !== 'constructor' && hasMethod(proto, propertyName)) {
                uniqMethodNames.add(propertyName);
            }
        });
    }

    return [...uniqMethodNames];
};

// GetDisplayName from https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
export const getDisplayName = Component =>
    Component.displayName || Component.name || 'Component';