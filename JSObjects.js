// Object is used to group data in key value pair format

let john = {
    name : 'John Rodhes',
    birthYear : 1980,
    job: 'Carpenter',
    friends : ['Sam','Jane','Guru']
}

console.log(john.birthYear); // dot notation
console.log(john['job']); // like an array

// Add more data to John object
john.sex = 'Male';
console.log(john);

// Another way of creating object
let jacob = new Object();
jacob.name = 'Jacob';
jacob.job = 'Singer';
jacob.sex = 'Male';
jacob.friends = [john,'sam','romeo']
jacob.birthYear = 1982 ;

console.log(jacob);
console.log(jacob.friends[0].name);