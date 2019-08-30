// creating object

// any changes occured in the object is changed directly into the object not a copy of the object , some thing like static in java

let myObject = {
    propertyA : 'property value A',  
    propertyB : 'property value B',  
    propertyC : 'property value C',  
    propertyD : 'property value D',  
}

// console.log(myObject);
// console.log(myObject.propertyB);

myObject.propertyB = myObject.propertyB + ' Updated'; 

// console.log(myObject.propertyB);

// console.log(myObject);

let newObject = function(testObject){
    let arrObject = [];
    for(i=0;i<=4;i++){
         arrObject[i] = testObject;
    }
    return {
        arrObject: arrObject,
    }
}

console.log(newObject(myObject).arrObject);

let aFunction = function(anyObject){
    return{                             // returning multiple values
       propA : 'Property A '+anyObject.propertyA,     
       propB : 'Property B '+anyObject.propertyB,     
    }
}

let getObject  =  aFunction(myObject);

console.log(getObject.propA);
console.log(getObject.propB);

