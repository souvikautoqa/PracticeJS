let names = ['souvik','jane','john']
console.log(names);

let jobs = new Array('singing','IT','technician');
console.log(jobs);

console.log(names.length);
console.log(names[3]);  // No out of bound exception, just says undefined

jobs[5] = 'No job' // Adding values at any index in array - array can have empty / undefined values as well 
console.log(jobs);
console.log(jobs[4]);

jobs.unshift('test',10,'now'); // adding elements in the start of the array 
console.log(jobs);

jobs.push(new Array('sending','data','from','back')); // adding an array object with an array
console.log(jobs);

console.log(jobs[jobs.length-1][2]); // accessing inner array data by index

jobs.pop(); //removes data from last index
console.log(jobs);

