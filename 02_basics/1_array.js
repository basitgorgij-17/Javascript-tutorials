let myArr = [1, 2, 3, 4, 5, 6]
console.log(myArr[4])

// Array Method
const dcHeros = ['spiderman', 'Hulk', 'Captain America', 'Batman']
//non primitive call by reference  heap memory work

dcHeros.push("Ironman")
dcHeros.push('Batman', 'Thor','www')
console.log(dcHeros)  

dcHeros.pop()
console.log(dcHeros)

dcHeros.shift()
console.log(dcHeros)

dcHeros.unshift('captain America', 'Spiderman')
console.log(dcHeros)

// Array convert into string in this Method

assignMyArr = myArr.join()
console.log(typeof assignMyArr)
console.log(assignMyArr)

console.log(dcHeros)
// slice copy your Array element 
noMainHeros = dcHeros.slice(3)
console.log(noMainHeros) 




//  splice modify your Orignal Array element
mainHeros = dcHeros.splice(0,3)
console.log(mainHeros)
console.log(dcHeros)

