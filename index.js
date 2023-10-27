var num = document.getElementById("display");
const add = document.getElementById("add");
const sub = document.getElementById("subract");
const multi = document.getElementById("multi");
const divide = document.getElementById("divide");


function addnumber(value){
    num.value += value;
}

function clears(){
    num.value="";
     
}

function oprator(value){
    num.value += value;


}
function result(){
    try {
        const result = eval(num.value);
        num.value = result;
    } catch (error) {
        num.value = 'Error';
    }
}

function deletes() {
    var num = document.getElementById("display"); 
    var currentValue = num.value; 
    if (currentValue.length > 0) {
        num.value = currentValue.slice(0, -1); 
    }
}
