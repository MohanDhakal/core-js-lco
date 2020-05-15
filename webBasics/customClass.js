class User {
    
    constructor(name,surname,age) {
        this.firstName=name;
        this.surname=surname;
        this.age=age;
    }
    getFullName(){
        let name=`${this.firstName} ${this.surname} is my full name`;
        return name;
    }
    editName(newName){
        const myName=newName.split(' ');
        this.firstName=myName[0];
        this.surname=myName[1];
    }
}
class Teacher extends User{
    constructor(firstName,surname,age,subject){
        super(firstName,surname,age);
        this.subject=subject;
    }

    getFullName(){
        let name=`${this.firstName} ${this.surname} is my full name${this.subject}`;
        return name;
    }

}

const john = new Teacher('john','dhakal',34,'python');
console.log(john.firstName);
john.editName("Johnny Anderson");
console.log(john.getFullName());