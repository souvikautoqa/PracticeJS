// Truthy and Falsy 

// Truthy values : Not falsy values
// Falsy values - undefined, null , 0 , '' ,  NaN

var x=0;

if(x){
    console.log('TRUE')
}else{
    console.log(x + ' is FALSE')
}

// Difference between (==) and (===)

// (==) is not a hard comparision, i.e. its not type compared

if(5 == '5'){
    console.log(true);
}else{
    console.log(false);
}

if(5 === '5'){
    console.log(true);
}else{
    console.log(false);
}