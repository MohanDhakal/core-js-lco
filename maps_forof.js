john={
    name:"I am john",
    age:24,
    isActive:true
}
var marry={
    name:'I am marry',
    age:23,
    isActive:true
}
var sam={
    name:'I am sam',
    age:29,
    isActive:false
}
let users=new Map();
users.set('john',john);
users.set('marry',marry);
users.set('sam',sam);
console.log(users.get('sam').age)
//iterating over items

for (const values of users.values()) {
console.log(values.name);    
}
for(const [key,value]of users.entries()){
    console.log(key+'='+value.name);
}