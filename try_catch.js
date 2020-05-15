const convertToRs=(dollar)=>{
    if(typeof dollar==='number'){
        return dollar *102
    }else {
        throw Error('Amount needs to be in number')
    }
} 
try {

    const myValue=convertToRs('3');
    console.log(myValue);    

} catch (error) {
    console.log(error);
}
console.log("run after the program crash")
