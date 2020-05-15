const student={
    name:'john',
    age: 23,
    isActive:true
}

//converting object into string to save into local storage.

const studentObjeToString=JSON.stringify(student);

localStorage.setItem('student',studentObjeToString);

const toJsonStudent=JSON.parse(studentObjeToString);
console.log(typeof toJsonStudent);
console.log(toJsonStudent.age);