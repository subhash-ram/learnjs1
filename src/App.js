import logo from './logo.svg';
import './App.css';
import Teacher, { promote } from './Teacher'; //default export & named export
import {Person} from './Person';
//import {promote} from "./Teacher"; //named export

//var -> scoped to function
//let -> scoped to the block
//const -> scoped to the block. used to declare constants

function SayHello()
{
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //const a = 1;
  //a = 2;
  //console.log(i);
}


SayHello();

//objects in js are just key value pairs, which are comma separated properties or functions.
const person = {
  name: 'Subhash',
  walk: function(){
    console.log('walking');
  },
  talk(){
    console.log(this);
  }
}

person.name = 'Sree';
person.walk();

person.talk();
const talk = person.talk.bind(person); //fixing the "this" binding to point to person object
console.log(talk);
talk();

/*const square = function(number)
{
  return number * number;
}*/

const square = number => number * number; //arrow functions parameters => expression
console.log(square(10));

const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: false},
  {id: 3, isActive: true}
];

const activeJobs = jobs.filter(job => job.isActive); //callback arrow function
console.log(activeJobs);

const colors = ['blue','green','yellow'];
//const getColors = colors.map(color => '<li>' + color + '</li>');
//array.map() function returns a list from an array
const getColors = colors.map(color => `<li>${color}</li>`); //map() function for arrays, callback arrow function and template literals
console.log(getColors);

//object restructuring
const address = {
  street : 'Mangal lane',
  city: 'Palakkad',
  country: 'India'
};

/*
const street = address.street;
const city = address.city;
const country = address.country;
*/

//object restructuring = above code to access object members is restructured like below
const {street, city, country} = address; //declaring three constants and assigning street, city and country of address object here.
const {street : st} = address; //st is the "alias" for the street constant.
console.log(city);
console.log(st);

const first = [1,2,3];
const second = [4,5,6];

const combined1 = first.concat(second);
console.log(combined1);

//spread operator (...)
// 1) to achieve concatenating arrays or objects.
// 2) to clone arrays or objects
const combined2 = [...first,'a',...second,'end element'];
console.log(combined2);

const clone = [...first];
console.log(first);
console.log(clone);

const person1 = {name : 'Subhash'};
const address1 = {street: '9708 kennemer dr'};
const combined3 = {...person1,...address1,city: 'plano'};
console.log(combined3);


//classes -> blueprint of objects - if same methods need to be defined for multiple objects they are defined in a class
const person3 = {
  name: 'Subhash',
  walk(){
    console.log('I am walking');
  }
}
//new person - see the "walk" method is duplicated when we created a second person object.
const person4 = {
  name: 'Sree',
  walk(){
    console.log('I am walking');
  }
}


const person5 = new Person('Karthika');
console.log(person5.name);



const teacher = new Teacher("Ramaswami", "Chemistry");
console.log(teacher.teach());

//node_modules folder has all the dependencies that can be added to package.json dependencies section.
//Modules -> They are separate files to split classes and modularize code. ECMA Script 6 or ES6 supports modules.
// "export" is used to make module public and "import" is used to import a module

//- There are two types of exports in ES6
//     - Named exports —> Ex:- import {promote} from "./Teacher";
//     - Default exports —> Ex:- import Teacher from './Teacher';

//Object-Oriented JavaScript

//1. Objects in javascript is represented by object literal or a {}
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function(){
    console.log('draw');
  }
};
circle.draw();

//2. Object Literal method is not a good way to create objects since if there are methods in an object and creating another object
// will duplicate all these methods. So to mitigate this there are two ways we can create objects in JS.
//1) Factory Function 2) Constructor function

//1) Factory Function -> Function that returns an object
function createCircle(radius)
{
  return {
    radius: radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function(){
      console.log('draw');
    }
  };
}

const circle2 = createCircle(1);
circle2.draw();

// 2) Constructor Function -> First Letter Caps for function and "this" keyword is used along with "new" for creating it.
// For C# developers following will look like a class. But in Javascript Constructor functions are equivalent of classes.
// When calling a constructor function with "new" keyword few things happen
// 1) Javascript creates an empty object {}
// 2) "this" will be set to point to that object
// 3) Finally it will return that object from the function. Note: we don't have to explicitly use "return this;" from a constructor function.
// It will happen automatically with "new" object creation.

// Without "new" keyword if a constructor function is called then "this" refers to the global object (which is window object in a browser).
// "this" by default refers to the global object (window in case of a browser or global object in case of node)
// and in node it is the "global object".

//NOTE: Every object in javascript has a "constructor" which references to the function() that was used to create that object.


//There are few different types of literals in JS
//1. Object Literals. ex:- let x = {}; JS will interpret this as let x = new Object();
//2. String Literals. ex:- let s = new String(); But quite often string literals are created using single quote (''), double quote ("") or backtick (``)
//3. Boolean Literals ex:- let isCircle = new Boolean(); But quite often boolean literals are represented by either "true" or "false"
//4. Number Literals ex:- let num = new Number(); But usually we use just numbers straight like 1, 2, 3...

function Circle(radius)
{
  console.log('this', this);
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}

const circleNew =  new Circle(20);

console.log(circleNew.constructor);

const c = Circle.call({}, 1); // When new is used to create an object of type function JS internally calls "call()" method like this.
const c1 = Circle.apply({}, [1]); //"apply()" method is similar to call() method, but it takes the second argument as an array.


//***Value Types (also called Primitives) in Javascript: String, Number, Boolean, null, undefined, Symbol (new in ES6)
//***Reference Types (also called Objects) in Javascript: Object, Function, Array

//"Primitives or Value types are copied by their value." See example below
//Example 1:
let x = 10;
let y = x;
 x = 20;
console.log(x); //x's value is independent of y since x is a primitive type.
console.log(y); //y's value is independent of x

//Example 2:
let num = 10;

 function increase(num)
 {
   num++;
 }

 increase(num);
 console.log(num);

//"Objects or Reference Types are copied by their reference". See example below.
//Example 1:
let x1 ={value: 10};
let y1 = x1;
x1.value = 20;

console.log(x1);
console.log(y1);

//Example 2:
let num1 = {value:10};
function increase1(num1)
{
  num1.value++;
}

increase1(num1);
console.log(num1);

//In Javascript objects can be dynamically changed to add new properties. This is a very powerful feature.
//See the dynamically added Property location to the object CircleNewProp below.
const CircleNewProp = new Circle(10);
CircleNewProp.location = {x: 1, y: 2};
console.log(CircleNewProp);

//Properties can be added using bracket notation also. This would be useful when we don't know the name of the property or when property name has special characters in it's name
const CircleNewProp2 = new Circle(10);
const propertyName = 'circle location';
CircleNewProp2[propertyName] = {x: 1, y: 2};
console.log(CircleNewProp2);

//To delete a property from an object use 'delete'
delete CircleNewProp.location;
console.log(CircleNewProp);

delete CircleNewProp2[propertyName];
console.log(CircleNewProp2);


// To enumerate all the properties of the object use for...in loop
for(let key1 in circleNew)
{
  if(typeof circleNew[key1] !== 'function') //To check type of property use 'typeof'
    console.log(key1);
}

//To get all the keys in an object use "Object.keys(<object>)" method.
let keys = Object.keys(circleNew);
console.log(keys);

//To check if a particular property is in an object use "if...in"
if('radius' in circleNew)
  console.log('Circle has a radius property');

//Abstraction in Object-Oriented Javascript - "Hide the details and show only essentials of an objects to outside world".
//To make a variable or method abstract just don't use "this" keyword to create them, rather declare them as local variables using "let"
//To access a local variable inside a function we could create getters and setters using "Object.defineProperty() method"
function CircleAbstraction(radius)
{
  console.log('this', this);
  this.radius = radius;
  let defaultLocation = {x: 0, y: 0};
  let innerMethod = function(num){
    console.log(num);
  }

  this.draw = function(){
    innerMethod(90);
    console.log('draw');
  }

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function (value){
       if(!value.x || !value.y)
         throw new Error('invalid value');
         defaultLocation= value;
    }
  })
}

const CircleAbstractionObject = new CircleAbstraction(10);
CircleAbstractionObject.defaultLocation = 1;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
