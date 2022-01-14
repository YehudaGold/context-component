import { string } from "prop-types";
import {ComponentType, ReactElement} from "react";

/** Check if there `methodName` on the `object` without running get properties */
export const hasMethod = (object: Record<string, unknown>, methodName: string): boolean => {
    const descriptor = Object.getOwnPropertyDescriptor(object, methodName);

    return !!descriptor && typeof descriptor.value === 'function';
};

/** Collecting all method names from the `object` prototype, stopping on `baseClass` prototype if exist */
export const getAllMethodNames = (object: Record<string, unknown>, BaseClass?: Record<string, unknown>) : string[] => {
    const uniqMethodNames = new Set<string>(),
          BaseProto = BaseClass ? BaseClass.prototype : null;

    for (let proto = object; proto && proto !== BaseProto; proto = Object.getPrototypeOf(proto)) {
        Object.getOwnPropertyNames(proto).forEach((propertyName) => {
            if (propertyName !== 'constructor' && hasMethod(proto, propertyName)) {
                uniqMethodNames.add(propertyName);
            }
        });
    }

    return Array.from(uniqMethodNames);
};

/**
 * Get component displayName.
 * [react-docs:higher-order-components](https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)
 */
export const getDisplayName = (Component: ComponentType): string =>
    Component.displayName || Component.name || 'Component';