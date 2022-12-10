var min = 0;
var sec = 0;
var milisec = 0;
var displayMiliSec = document.getElementById("displayMiliSec");
var displaySec = document.getElementById("displaySec");
var displayMin = document.getElementById("displayMin");


var interval;

function timer(){
    milisec++
    if(milisec == 10){
        milisec = 0;
        sec++;
        if(sec == 60){
        sec = 0;
        min++;
        }
    }
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMiliSec.innerHTML = milisec;
}

function startTimer(){
    interval = setInterval(function(){
        timer()
    },100)
}

function pauseTimer(){
    clearInterval(interval);
}

function resetTimer(){
    pauseTimer();
    min = 0;
    sec = 0;
    milisec = 0;
    displayMiliSec.innerHTML = milisec
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;

}