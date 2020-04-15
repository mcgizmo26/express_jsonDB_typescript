import BaseEntity from './BaseEntity';
import { entity, id, persist, required, length, isEmail, isPhone, isInteger } from '../decorators';

@entity("people")
export default class Person extends BaseEntity {
    @id
    id: string;

    @persist
    @required
    @length(3, 400)
    firstName: string;

    @persist
    @required
    @length(3, 400)
    lastName: string;

    @persist
    @required
    @isEmail
    email: string;

    @persist
    department: string;

    @persist
    @isPhone
    @required
    mobileNumber: string;

    @persist
    @required
    @isInteger(1, 130)
    age: number;

}