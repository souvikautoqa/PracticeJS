// Working with variables

var name = 'John'; console.log(name)  // Basic variable

// Data types  - Java Script has Dynamic Typing that means it figures out the data type by itself
    // Primitive data types
    var number = 1; // JS has all number as floating type, that means 
                    // it has a decimal in the end by default
    var names = 'Java Script';console.log(names); //  Sequence of characters
    var status = true;console.log(status); //  Boolean with true and false
    var job; console.log(job); // Undefined means that a variable that doesnt have a value 
    var someObject = null; console.log(someObject); // Null means non existent

    // Auto type casting
    var fname = 'John';
    var age = 28;

    console.log(typeof fname);
    console.log(typeof age);
    console.log (fname + ' -- ' + age + ' is of type '+typeof (fname + age));

    
    // Non primitive data types (Object based)
    var anotherObject = this; console.log(anotherObject);