let numberInput = document.querySelector('#numberToCount');
const inputSubmit = document.querySelector('#form');
let countNumber = document.querySelector('#count')
let countDown;
let timer;

inputSubmit.addEventListener("submit", (event)=>{
    event.preventDefault();
    let numberToCountDown = numberInput.value;
  
    timer = setInterval(()=>{
        countDown = numberToCountDown--;
        countNumber.innerHTML = countDown; 
        isNegative();
    }, 1000);
})

function isNegative(){
    if(countDown <= 0){
        clearInterval(timer);
    }
}




