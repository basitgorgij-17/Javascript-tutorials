// Immediately Invoked Expression Function
    // Two way we use IIEF function directly/urgently execution use IIFE or if you want global value distract use IIFE

// named IIFE function
(function foo(user){
    console.log(`Hey ${user} welcome our website `)
})('Basit');
// nonamed IIFE function
((currentDate)=>{
    console.log(new Date())
})()    