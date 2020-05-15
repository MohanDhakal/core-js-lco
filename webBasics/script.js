// const myElement=document.querySelectorAll('p');
// const firstElement=document.querySelector('p');
// console.log(firstElement.textContent="I am being changed");

// const myPElements=document.querySelectorAll('p');

// myPElements.forEach(function (p){
// p.textContent="i am changed using loop in js";
// });

const myNewPg=document.createElement('p');
myNewPg.textContent="i was added via js";
document.querySelector('body').appendChild(myNewPg);

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent="I was Clicked";
    console.log(event.target.textContent);
})

//track input form 


document.querySelector('#myForm').addEventListener('input',(event)=>{
    console.log(event.target.value);
})
