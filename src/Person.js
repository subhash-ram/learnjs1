export class Person
{
    constructor(name) { //constructor is a special method which is called when we instantiate a class.
        this.name = name;
    }
    walk(){
        console.log('I am walking');
    }
}