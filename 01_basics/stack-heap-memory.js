//Understand about Stack and Heap memory

// Stack (primitive datatype) call by value
let account = 'basitgorgij@gmail.com'
let fraccount = account
fraccount = 'mohammadaqeel@gmail.com'
// this is call by value   copy value
console.log(account)
console.log(fraccount)

//Heap (non-primitive datatypes) call by reference
let bio ={
    name: 'Abdul Basit',
    fname: 'Javed'
}
let bio2 = bio
bio2.name = 'Azhan'
bio2.fname = 'Ahmed' 

// this is call by reference change reference
console.log(bio)
console.log(bio2)