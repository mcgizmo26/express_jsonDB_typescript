"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// Class Decorator
function entity(name) {
    return function (constructor) {
        Reflect.defineMetadata("entity:name", name, constructor);
    };
}
exports.entity = entity;
// Property Decorator for a class
function persist(target, propertyKey) {
    let objectProperties = Reflect.getMetadata("entity:properties", target) || [];
    if (!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        Reflect.defineMetadata("entity:properties", objectProperties, target);
    }
}
exports.persist = persist;
// Property Decorator for a class
function id(target, propertyKey) {
    Reflect.defineMetadata("entity:id", propertyKey, target);
}
exports.id = id;
//# sourceMappingURL=entity.js.map