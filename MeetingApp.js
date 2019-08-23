//Meeting app


let myToDos = {
    day : 'Not Set',
    meetingsLeft : 0,
    meetingsDone : 0,
}

let addMeeting = function(objTodo = null, addMeeting = 0){
    objTodo.meetingsLeft += addMeeting; 
}

let finishMeeting = function(objTodo = null, finishMeeting = 0){
    if(objTodo.meetingsLeft == 0) {
        return 0;
    }else {
        objTodo.meetingsDone = finishMeeting;
        objTodo.meetingsLeft -= objTodo.meetingsDone;
    }
}

let getDaySummary = function (){
    console.log(`Number of meetings left ${myToDos.meetingsLeft}`);
    console.log(`Number of meetings done ${myToDos.meetingsDone}`);
}

addMeeting(myToDos,5);

addMeeting(myToDos,2);

getDaySummary();

finishMeeting(myToDos,8);

getDaySummary();
