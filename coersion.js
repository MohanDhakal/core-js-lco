const giveType=typeof 5.0;
console.log(giveType);

const loginDetails=[
    //logice for getting details from DB
]

const loginID=loginDetails[0];

if(loginDetails){
    console.log('Allow user to login');
}else{
    console.log('Auth Failed');
}