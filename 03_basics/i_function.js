// Function Work for reptitive task
// if you this code execution 10X time it really hard but use function it is easy

// console.log('B');
// console.log('A');
// console.log('S');
// console.log('I');
// console.log('T');

function myName(){
console.log('B');
console.log('A');
console.log('S');
console.log('I');
console.log('T');
}
// myName();
// myName();
// myName();
// myName();
// myName();

// If you store function value into variable using Return keyword

// This is wrong way to store function value into variable
// function num(num1,num2 ==>> This is parameter ){
// num1 + num2
// }
// let result = num(20,15)  ===>> This is arguments
// console.log(result)

function num(num1,num2){
return  num1 + num2
}
let result = num(20,45)
// console.log(result);


function userLoggedIn(userName){
if(!userName){
    return  console.log('Please Enter a username')
}
return `${userName} Just Logged in`
}
// console.log(userLoggedIn());


// add multi arguments in one parameter in Function
    // Using Rest operator value form into Array
function addToCard(...number){
    return number
}
 console.log(addToCard(200,400,600,800))



//  Pass Object into Function
const user = {
    username: 'Abdul Basit',
    email: 'basitgorgij@gmail.com'
}
function handleObject(getObject){
    return `Username is ${getObject.username} and has email is ${getObject.email}`
}
// console.log(handleObject(user))
console.log(handleObject({
    username: 'Azhan Ahmed',
    email: 'azhanahmed@gmail.com'
}))


// Pass Array into Function
let csSquad = ['Bogy','Luffy','Prac','Baluch','MK']
function handleArray(getArray){
    return `Best Awper in cs2 is ${getArray[2]}`
}
// console.log(handleArray(csSquad))
console.log(handleArray(['MK','umero','Kevin', 'MB']));


