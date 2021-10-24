function receivesAFunction(cb){
    return cb(console.log('hi'))
}
function returnsANamedFunction(){
    return function receivesAFunction(){}
}

function returnsAnAnonymousFunction() {
    return () => {}
}



























// function Monday() {
//     exerciseRoutine(liftWeights);
// }
// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity()
// }

// exerciseRoutine(function (){
//     console.log("Stretch! Work that core!");
// });

// // more concise arrow function 

// exerciseRoutine(() =>{
//     console.log("Stretch! Work that core!");
// });

// // even shorter 

// exerciseRoutine(() => console.log("Stretch! Work that core!"));


