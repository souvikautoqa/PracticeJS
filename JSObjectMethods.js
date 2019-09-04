// Object is used to group data in key value pair format

let john = {
    name : 'John Rodhes',
    birthYear : 1980,
    job: 'Carpenter',
    friends : ['Sam','Jane','Guru'],
    calcAge: function(){
        return (2019-this.birthYear); // Passing birth year directly in function as it exist in the object
    }
}

console.log(john.calcAge()); // calling the method

let sam = {
    name : 'Sam Kenny',
    birthYear : 1985,
    job: 'Singer',
    friends : ['Sam','Jane','Guru'],
    calcAge: function(){
        this.age = (2019-this.birthYear); // Passing birth year directly in function as it exist in the object
    }
}

console.log(sam.calcAge()); 
console.log(sam); 

let romeo = {
    name : 'Romeo Gill',
    birthYear : 1985,
    job: 'Teacher',
    friends : ['Sam','Jane','Guru'],
    calcAge: function(){
        return (2019-this.birthYear); // Passing birth year directly in function as it exist in the object
    },
   
}
romeo.age = romeo.calcAge();
console.log(romeo); 