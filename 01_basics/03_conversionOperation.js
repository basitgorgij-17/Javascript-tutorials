// 1.Conversion Work
let num = "AB"

// console.log(num);
// console.log(typeof (num));

let valueInNumber = Number(num)
// console.log(typeof (valueInNumber))
// console.log(valueInNumber)

/*
After Applying Number Conversion Operation
"33" => 33
33abc => Nan(not a number)
true => 1, False => 0
Null => 0
*/


let isloggedIn = ""

let boolIsloggedIn = Boolean(isloggedIn)
// console.log(boolIsloggedIn);

/**
 After Applying Boolean Conversation Operation
 1 => true
 "" => false
 "Abu" => true
 */


//  let stringNumber = 55

//  let stringValue = String(stringNumber)
//  console.log(stringValue);
//  console.log(typeof (stringValue));



//  let obNumber = null

//  let obValue = Object(obNumber)
//  console.log(obValue);
//  console.log(typeof (obValue));


 /**
  After Applying Object Conversation Operation
  33 => [Number: 33]
  "Abu" => [String: 'Abu']
  true => [Boolean: true], false => [Boolean: false]
  Undefined/Null => {}
  */


// 2.Operation Work
    // Apply +,- in Number
    let value = 3
    let negvalue = +value
    // console.log(negvalue);
    
    /** Some Mathematics Operation
    console.log(2+2);
    console.log(2-2);
    console.log(2*2);
    console.log(2**5);
    console.log(2/2);
    console.log(2%100); **/
     
    
    // + Two String
    let str1 = "Abdul"
    let str2 = " Basit"
    let str3 = (str1 + str2)
    // console.log(str3);
    
    // Complex Situtation Operation
    // console.log(1+2);c
    // console.log("1"+2);
    // console.log(1+"2");
    // console.log(1+3+"2");
    // console.log("6"+2+1);

    let gameCounter = 200
    gameCounter++;
    console.log(gameCounter);
    
    // POSTFIX INCREMENT
    let x = 3
    const y = x++
    console.log(y);
    

    // PREFIX INCREMENT
    let x2 = 5
    const y2 = ++x2
    console.log(y2);
    
    
    
 
 

