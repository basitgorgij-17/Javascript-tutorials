// Two way declared Object in Javascript

// 1.Object constructor ===>> every time singleton

// 2.object literals
//add symbols in object key
const sym = Symbol('keyValue1')
const userDetails = {
    name:  "Basit",
    'fullName': 'Abdul Basit', // ===>> this key and value in Square notation
    age: 19,
    [sym]: 'keyValue1',
    'email': "basitgorgij@gmail.com",
    field: 'Software Engineer',
    isLoggedIn: false,
    isActiveDay: ['Monday','Thursday', 'Saturday']
}
// Object value access 
// Dot Notations
console.log(userDetails.name)
// square Notation
console.log(userDetails["email"]) 
console.log(userDetails['fullName']) 
console.log(userDetails.isActiveDay[0])  //Array access trick

// Symbol value in square Notation
console.log(userDetails[sym])


userDetails.email = 'basitbaluchh@gmail.com'
console.log(userDetails.email)  

// you can freeze the object


// Object.freeze(userDetails)
userDetails.email = 'basit12@chatgpt.com'  // can't change object is freeze
console.log(userDetails['email'])


// How to  add function object
userDetails.greeting = function(){
    console.log(`Hello welcome my website ${this['fullName']}`)
}
console.log(userDetails.greeting())