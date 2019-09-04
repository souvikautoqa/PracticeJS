
// functions

// basic function 
//  this is basic function with 2 args
function calcAge(birthYear,test){
    console.log(test);
    console.log(birthYear);
    console.log('Test String' + birthYear);
    console.log(2019 - birthYear);
    console.log(2019 - birthYear+test);
}

// its possible to call the above function without right set of arguments 
calcAge(); // args are considered as undefined, mathematical calucation with undefined variable becomes NaN
calcAge(1982); // one of the args is considered as undefined, mathematical calucation with undefined variable becomes NaN
calcAge(1982,'test'); 

// function that returns
function getRandomNumber(maxNumber){
    return Math.round(Math.random() * (maxNumber - 1)+1);
}

let random = getRandomNumber(22);
console.log(random);

// function expression - function definition without a name

// function expression always return some value but function statement can return nothing / undefined if there is no return 
// statement

 let testFunc = function(name) { 
        console.log(name);
 }

 testFunc('test name');