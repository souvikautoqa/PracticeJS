
let getGreeting = function(param = 1 ,paramA = '50'){ // function with param that has default value
    console.log('Hi this is a basic function ' + param +' '+ paramA);
}

getGreeting(10);

let addNums = function(numA,numB){
    return numA+numB;
}

console.log(addNums(10,20));