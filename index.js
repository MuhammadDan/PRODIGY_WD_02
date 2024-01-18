var isStop = true;
var Second = 0;
var minutes = 0;
var lapNumber = 0;
const playbutton = document.querySelector(".play");
playbutton.addEventListener('click',start);
function start(){
    if(isStop == true){
        isStop = false;
        timer();
    }
}
const innercircle = document.querySelector(".innercircle");
function timer(){
  if(isStop==false){
    Second = parseInt(Second);
    minutes = parseInt(minutes);
    Second++;
    if(Second>60){
      Second=0;
      minutes++;
    }
    if(Second<10){
      Second = "0" + Second;
    }
    if(minutes<10){
      minutes = "0" + minutes;
    }
    innercircle.style.fontSize = "35px";
    innercircle.style.color = "white";
    innercircle.innerHTML = minutes+" : "+Second;
    setTimeout("timer()",1000);
  }
}
const stopbutton  = document.querySelector(".stop");
stopbutton.addEventListener('click',stop);
function stop(){
    isStop = true;
}
const resetbtn = document.querySelector(".reset");
resetbtn.addEventListener('click',reset);
function reset(){
  isStop = true;
  Second = 0;
  minutes = 0;
  lapNumber = 0;
  innercircle.innerHTML="00 : 00";
  const lapList = document.querySelector(".laps");
  lapList.innerHTML="";
}

const lapButton = document.querySelector(".lap_item_cleartwo");
lapButton.addEventListener('click',recordLap);

function recordLap(){
  const lapTime = minutes + ":" + Second;
  const lapItem = document.createElement("li");
  lapItem.className = "li-items";
  lapNumber++; 
  lapItem.innerHTML = `<span class="number">#${lapNumber}</span> <span class="time_lap">${lapTime}</span>`;
  const lapList = document.querySelector(".laps");
  lapList.appendChild(lapItem);
}
