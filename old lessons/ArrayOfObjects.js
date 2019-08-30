
let arrTodo = [{
    title:'Buy bread',
    isDone:false,
},{
    title:'Hit the gym',
    isDone:false,
},{
    title:'Learn JS',
    isDone:true,
}]


// find Index method for Array

let findTodo = function(arrayTodo,title){
    let index = arrTodo.findIndex(function(todo,index){
        return (todo.title.toLowerCase() == title.toLowerCase());
    })
    return index;
}

console.log(findTodo(arrTodo,'Learn JS'))