let myToDoToday = {
    meetingsLeft : 0,
    meetingsDone : 0,
    
    addMeeting: function(addMeeting){
        this.meetingsLeft += addMeeting;
    },
    finishMeeting: function(finishMeeting){
        this.meetingsDone = finishMeeting;
        this.meetingsLeft -=this.meetingsDone;
    },
    summary : function(){
        return `You have ${this.meetingsLeft} meetings and ${this.meetingsDone} meetings finished`
    },
}

myToDoToday.addMeeting(5);
myToDoToday.addMeeting(3);

console.log(myToDoToday.summary());

myToDoToday.finishMeeting(2);

console.log(myToDoToday.summary());


