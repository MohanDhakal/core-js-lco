// var h=document.createElement('h1')
// var myValue=document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)
var val=5;
while (val>0) {
    console.log(val)
    val--;
}

var ul=document.getElementById('list');


var addButton=document.getElementById('add');
var removedButton=document.getElementById('remove');

addButton.addEventListener('click',addItem);
removedButton.addEventListener('click',removeItem);


function removeItem(){
    li =ul.children;
    for (let index = 0; index < li.length; index++) {
    
        while(li[index]&&li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
        
    }
}


//adding todo with fade in 

function addItem(){
    var input=document.getElementById('input');
    var item=input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item);
    
    if(item===''){
        return false;
    }else{
        li=document.createElement('li');
        var checkBox=document.createElement('input');
        checkBox.type='checkbox';
        checkBox.setAttribute('id','check');
        var label=document.createElement('label');
        label.setAttribute('for','item');
 
        //adding these element on web page
        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
    
        setTimeout(() => {
            li.className='visual';
        }, 2);

        input.value='';
    }
}