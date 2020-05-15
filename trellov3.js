let myTodos={
    day:'Monday',
    meetings:0,
    meetDone:0,
    addMeeting:function(num){
        this.meetings=this.meetings+num;
    },
    summary:function(){
        return `you have ${this.meetings}meetings today`;
    }

}

myTodos.addMeeting(2);
console.log(myTodos.summary());