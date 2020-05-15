
function myValidation(){

    // let myValue=document.querySelector('#myForm')
    
    let myValue=document.getElementById('myForm').value;

    if(isNaN(myValue)|| myValue<1||myValue>20){
        console.log('Not a valid input');

    }else{

        console.log("this input is okay");

    }
}

document.querySelector('.myForm').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value="";
    event.target.realname.value="";
})

