// Understand Scope in Javascript


// This is Global Scope   =====>>>>  global scope value access in scope
// let a  = 10;
// const b = 20;
// var c = 30;

// {
//     console.log(a)    
//     console.log(b)    
//     console.log(c)    
// }

// This is block scope  ====>>> block scope value can't access in global only var can access
{
    let a  = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

// Nested Function (call Stack)
    //function/loop/if-else: parent can't access child value and child can parent value
function one(){
   const name = 'Abdul Basit'

   function Two(){
    var fathername = 'Javed'
    console.log(name)
   } 
   console.log(fathername)

//    Two()
}
// one()

// Important
    // Static Function can access before initalizing but expression can't access before initalizing
    console.log(valueOne(5))
function valueOne(num){
    return num + 1
}

console.log(valueTwo(5))
const valueTwo = function(num){
    return num + 2
}