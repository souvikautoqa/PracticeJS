let stringVal = 'someVal';

if(true){
    console.log(stringVal);
    var stringMoreVal = 'someMoreVal' // var can be accessed out of scope
    console.log(stringMoreVal);
}
console.log(stringMoreVal);
