// Object Constructor 
// const obj = new Object() ===>>> Singleton  

const userData = {}

userData.id = '101';
userData.name = 'Waleed';
userData.email = 'waleedbalosi@gmail.com';
userData.isLoggedIn = true;

// console.log(userData)


// nested object

const studentDetails = {
    id: 102,
    fullName: {
        firstName: 'Abdul',
        lastName: 'Basit',
        fatherName: 'Javed'
    },
    field: {
        department: 'Software',
        subject: {
            course1: 'HTML',
            course2: 'CSS',
            course3: 'Javascript',
            marks: {
                HTMLMark: 93,
                CSSMark: 75,
                JSMarks: 95,
            }
        }
    }
}

// console.log(studentDetails.fullName)
// console.log(studentDetails.field.department)
// console.log(studentDetails.field.subject.course2)
// console.log(studentDetails.field.subject.marks.CSSMark)


// Two way marge object in javascript
const obj1 = {a: 1,b: 2,}
const obj2 = {c: 3, d: 4}
const obj3 = {e: 5, f: 6}
// 1.object assign
// const obj = Object.assign({},obj1,obj2,obj3);
// console.log(obj)


// 2.spread Operator
const obj = {...obj1,...obj2,...obj3}
// console.log(obj)

// Convert key and value into Array
const tinderUserinfo = {
    userName: "Basit Gorgij",
    email: "basitgorgij@gmail.com",
    password: "Basit4321",
    isLoggedIn: true
}

// object keys convert into array
// console.log(Object.keys(tinderUserinfo));

// object values convert into array 
// console.log(Object.values(tinderUserinfo));

// object key and value pair convert into array
// console.log(Object.entries(tinderUserinfo));

// check value is exist in object
// console.log(tinderUserinfo.hasOwnProperty("isLoggedIn"))


// Understand Object de-structure

const smitDetails = {
    batch: 18,
    course: 'Web n App',
    courseInstructor: 'Inno Sufiyan',
    campus: 'Numaish'
}

// Simple way access Object value
// console.log(smitDetails.courseInstructor)

// De-Structure way access Object value
const {courseInstructor: instructor} = smitDetails
console.log(instructor)


// React Method
// const nav = (institute) =>{

// }
// nav (institute = 'SMIT')