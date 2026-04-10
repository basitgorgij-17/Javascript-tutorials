const marvelHeros = ['Spiderman', 'Thor', 'Hulk', 'Ironman']
const dcHeros = ['Superman', 'Batmen', 'Flash', 'Deadpool']
const fobricsMen = ['Ronaldo', 'Messi', 'Kabbib', 'Rafel nadal']

//This not merged two array
marvelHeros.push(dcHeros)
console.log(marvelHeros)

// This way be merged array 

let heros = marvelHeros.concat(dcHeros)
console.log(heros)

// This spread operator way be array merged
const superHeros = [...marvelHeros, ...dcHeros, ...fobricsMen]
console.log(superHeros)


// Nested Array

const nestedArr = [1,2,3, [4,5,7], [8, 9, [4, 5, 8]]]
let mergeArr = nestedArr.flat(Infinity)
console.log(mergeArr)


// understand Array advance method

// ask this is array and not
console.log(Array.isArray('Basit'));

// convert string into Array 
console.log(Array.from("BASIT"));

// convert multiple variable into array
let name = 'Basit';
let fname = 'Javed';
let cast = 'Baloch';
console.log(Array.of(name,fname,cast)) 


