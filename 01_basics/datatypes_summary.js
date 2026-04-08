// Two Datatypes 

// 1. Primitive Datatypes (call by value)
// String, Number, Bolean, Null, Undefined, Symbol, BigInt

// string
const name = "Basit"
console.log(typeof name)  //string type is string

// Number
const score = 34559
const scorevalue = 455.55
console.log(typeof score)  //Number type is Number

// Boolean
const isLoggedIn = true
console.log(typeof isLoggedIn) //Boolean type is Boolean

// Null
const Temp = null //empty value 
console.log(typeof Temp)  //Null type is Object

// undefined
let unEmail;
console.log(typeof unEmail)  //Undefined type is undefined
// let isEmail= undefined;

//Symbol 
const cnic = Symbol('42101-548889')
const anotherCnic = Symbol('42101-54889')
// console.log(cnic == anotherCnic);
console.log(typeof cnic)  //Symbol type is Symbol


// BigInt
const bigNumber = 447777888n
console.log(typeof bigNumber);  ///BigInt type is BigInt


// 2. Non Primitive Datatypes (call by reference)
// Array, Object, Functions

// Array
const heros = ["Batman", "Spiderman", "Hulk"];
console.log(typeof heros) //Array type is object 

// Object
let obj = {
    name:"AB",
    age:20,
}
console.log(typeof obj)  //Object type is Object

// Function
const myFunction = function(){
    console.log("Hello World!");
}
console.log(typeof myFunction) //Function type is Object

