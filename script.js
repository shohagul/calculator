const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');

const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearLastEl = document.querySelector('.last-entity-clear');
const clearEl = document.querySelector('.all-clear');


let dis1Num = '';
let operator = '';
let dis2Num = '';

let result = null;

let lastOperation = '';
let haveDot = false;
numbersEl.forEach(number=>{
   
    number.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
})

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) =>{
        if(!dis2Num) return;
        haveDot =false;
        const operationName =e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation()
           
        }else{
            dis2Num = parseFloat(dis2Num);
            display1El.innerText = dis2Num;
            result = dis2Num;
        }
       
        clearVar(operationName);
        lastOperation = operationName
      

    })
});

function clearVar(operationName){
    dis1Num += dis2Num + ' ' + operationName + ' ';
   
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
   
    
}


function mathOperation(){
    if(lastOperation === 'x'){
         result = parseFloat(result) * parseFloat(dis2Num)
       
       
    }
    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num)
      
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num)
      
    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num)
      
    }


}

equalEl.addEventListener('click', function(e){
    if(!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    dis2Num = result;
    display1El.innerText = '';
    dis1Num = ''
})