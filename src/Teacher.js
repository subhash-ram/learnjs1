import {Person} from './Person';

export function promote(){}

//inheritance (using extends keyword) - super class and subclasses are created to re-use superclass methods in subclasses
export default class Teacher extends Person
{
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    teach()
    {
        console.log('I am a teacher and I am teaching');
    }
}
