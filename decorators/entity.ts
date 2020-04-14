import "reflect-metadata";

// Class Decorator
export function entity(name: string) {
    return function( constructor: Function) {
        Reflect.defineMetadata("entity:name", name, constructor);
    }
}

// Property Decorator for a class
export function persist(target: any, propertyKey: string) {
    let objectProperties: string[] = Reflect.getMetadata("entity:properties", target) || [];
    if(!objectProperties.includes(propertyKey)) {
        objectProperties.push(propertyKey);
        Reflect.defineMetadata("entity:properties", objectProperties, target);
    }
}

// Property Decorator for a class
export function id(target: any, propertyKey: string) {
    Reflect.defineMetadata("entity:id", propertyKey, target);
}