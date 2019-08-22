
let arrNames = ['Souvik','Dutta',4534,true];

console.log(arrNames);

console.log(`text me ${arrNames[3]}`);

arrNames.shift(); // remove the value from begining

console.log(arrNames.length);

arrNames.unshift(1); // add a new value in the begining

console.log(arrNames.length);

console.log(arrNames);

arrNames.push(100); // push a value at the end

console.log(arrNames);

arrNames.pop() // remove a value from the end

console.log(arrNames);

console.log(arrNames.slice(1,3)); // doesnt actually update the array but extracts the index range values

console.log(arrNames);

arrNames.splice(1,2); // splice actually changes the array and removes the index range 

console.log(arrNames);