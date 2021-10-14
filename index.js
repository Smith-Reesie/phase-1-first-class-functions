function receivesAFunction(callback) {
   return callback()
    
}

function returnsANamedFunction() {
    return function felix(){

    }
}

function returnsAnAnonymousFunction() {
    return function() {

    }
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


